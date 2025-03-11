fact.textContent = "loading..."

fetch("https://catfact.ninja/fact") //lets java know to go out into web and find api/website//
.then(response => response.json())
.then(data => {
    console.log(data);
// tests in  console //
    console.log(data.fact)

    fact.textContent = data.fact;
})

fetch("https://cataas.com/cat?type=medium&json=true")
.then(response => response.json())
.then(data=>{
    console.log(data.url);

    catimage.src=data.url
})