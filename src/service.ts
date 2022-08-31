import axios from 'axios'
export async function reqApi (firstUser:string,  secondUser:string){
    try{
        const promiseFirtsUser = await axios.get(`https://api.github.com/users/${firstUser}/repos`)
        const promiseSecondUser = await axios.get(`https://api.github.com/users/${secondUser}/repos`)
        let count1 = 0
        let count2 = 0
        promiseFirtsUser.data.map((item: any)=>count1 += item.stargazers_count)
        promiseSecondUser.data.map((item: any)=>count2 += item.stargazers_count)
        if(count1 > count2){
            return{
                winner: firstUser, 
                loser: secondUser, 
                draw: false 
            }
        }else if(count2 > count1){
            return{
                winner:secondUser, 
                loser: firstUser, 
                draw: false 
            }
        }else{
            return {
                winner: null, 
                loser: null, 
                draw: true
            }
        }
    }catch{
        throw { type: "Not Found"}
    }


}