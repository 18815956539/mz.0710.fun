var posts=["2024/04/27/bug修复完毕/","2024/04/27/“音乐馆和主页的音乐”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };