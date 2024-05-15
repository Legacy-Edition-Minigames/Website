import { marked } from "marked";

export interface Post {
    type: string;
    image?: string;
    title: string;
    previewText: string;
    mainText: string;
    markdown?: boolean;
    permalink: string;
}

export const markdownLinks: Array<string> = [
	"/posts/faq/0000-1-1-lunar.markdown",
	"/posts/faq/0001-1-1-modpack.markdown",
	"/posts/faq/0002-1-1-bedrock.markdown",
	"/posts/faq/0003-1-1-updatewhen.markdown",
	"/posts/faq/0004-1-1-whitelist.markdown",
]

interface postInfo {
	name: string,
	date: string
}

export async function displayPosts(type: string) {
    let postLinks: postInfo[] = [];
    fetch("/posts.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    }).then(postList => {
        postList[type].forEach((post: postInfo) => {
            postLinks.push(post);
        });
        postLinks.forEach(link => {
            fetch(`/posts/${type}/${link.name}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then(post => {
				var postElement = document.querySelector(".blog-faq")!;
				if (type === "faq") {
					postElement = document.querySelector(".blog-faq")!;
				} else {
					console.log("blog");
					postElement = document.querySelector(".blog-posts")!;
				}

                    const imageSrc = post.image ? post.image : '/assets/post-image-placeholder.png';
                    
                    const postDescription = document.createElement('div');
                    postDescription.classList.add('post-description');
                    
                    const titleHeader = document.createElement('h3');
                    titleHeader.textContent = post.title;
                    
                    const previewText = document.createElement('span');
                    previewText.classList.add('post-text');
                    previewText.innerHTML = post.markdown !== false ? post.previewText : post.previewText;
                    
                    const moreInfoLink = document.createElement('a');
                    moreInfoLink.href = `/viewPost/index.html#/posts/${type}/${link.name}.json`;
                    moreInfoLink.classList.add('minecraft-button', 'post-link');
                    moreInfoLink.textContent = 'More Info';
                    
                    postDescription.appendChild(titleHeader);
                    postDescription.appendChild(previewText);
                    postDescription.appendChild(moreInfoLink);
                    const shart = document.createElement('img');
                    shart.className = "post-image"
                    shart.src = imageSrc;
                    postElement!.appendChild(shart);
                    
                    postElement!.appendChild(postDescription);
            })
            .catch(error => {
                console.error(error);
            });
        });
    })
    .catch(error => {
        console.error(error);
    });
}


export async function displayFullPost() {
    const link = window.location.hash.substring(1);
    console.log(link);
		fetch(link)
	.then(response => {
	  if (!response.ok) {
		throw new Error('Network response was not ok');
	  }
	  return response.json(); 
	})
	.then(async post => {		
	
			if (window.location.hash === "#/posts/faq") {
				document.querySelector("#return")!.setAttribute("onclick", "setTimeout(function timeout() { window.location = '" + "/faq/" + "'; }, 100);");
			} else if (window.location.hash === "#/posts/blog") {
				document.querySelector("#return")!.setAttribute("onclick", "setTimeout(function timeout() { window.location = '" + "/blog/" + "'; }, 100);");
			} else {
				document.querySelector("#return")!.setAttribute("onclick", "setTimeout(function timeout() { window.location = '" + "/" + "'; }, 100);");
			}

			const titleHeader = document.createElement('h1');
			titleHeader.textContent = post.title;

			const imageHeader = document.createElement("img");
			imageHeader.src = post.image || '/assets/post-image-placeholder.png';
			imageHeader.style.width = "50%";
			imageHeader.style.height = "auto";
			imageHeader.style.border = "2px solid black";


			const mainText = document.createElement('div');
			mainText.innerHTML = await marked.parse(post.mainText!);
	
			document.querySelector("#post")!.appendChild(titleHeader);
			document.querySelector("#post")!.appendChild(imageHeader);
            document.querySelector("#post")!.appendChild(mainText);
	})
	.catch(error => {
	  console.error(error);
	});
}