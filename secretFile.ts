( () => {
    class secretFile {
        secretMessage() {
            console.log("shhhhh");
        }
     }

     const SecretFile = new secretFile();
     SecretFile.secretMessage();
})();