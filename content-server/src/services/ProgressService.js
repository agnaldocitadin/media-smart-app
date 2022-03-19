
export const ProgressService = {

    populateManifests: (manifests) => {
        return new Promise(resolve => {
            
            manifests.forEach(element => {
                element.progress = 20
            })

            resolve(manifests)
        })
    }

}