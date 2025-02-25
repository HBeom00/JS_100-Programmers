function solution(name, yearning, photo) {
    const str = {}
    const result = []
    
    for(let i = 0; i < name.length; i++){
        str[name[i]] = yearning[i]
    }
    
    for(let i = 0; i < photo.length; i++){
        let count = 0
        for(let j = 0; j < photo[i].length; j++){
            if(name.includes(photo[i][j])){
                count += str[photo[i][j]]
            }
        }
        result.push(count)
    }
    return result
}