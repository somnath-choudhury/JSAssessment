const NFTs = []

function mintNFT (_name, _age, _eyeColor) {
    const nft = {
        "name" : _name,
        "age" : _age,
        "eyeColor" : _eyeColor
    }
    
    NFTs.push(nft)
    console.log("NFT Name: "+_name)
}


function listNFTs () {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nName: "+NFTs[i].name)  
        console.log("Age: "+NFTs[i].age)  
        console.log("Eye Color: "+NFTs[i].eyeColor)    
    }
}

function getTotalSupply () {

    console.log("\nNumber of NFT's: " +NFTs.length)
}

mintNFT("Somnath", 21, "black")
mintNFT("Aditya", 21, "brown")
mintNFT("Kirtan", 20, "blue")
mintNFT("Karan", 20, "black")
listNFTs()
getTotalSupply()
