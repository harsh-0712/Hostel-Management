import axios from 'axios'  

// make api request




export const register=async(items)=>{
    try{
        return await axios.post('http://localhost:8080/api/createQuery',{items})
    }
    catch(error){
        console.log(error);
        return error
    }
}

export const update=async(items)=>{
    try{
        return await axios.post('http://localhost:8080/api/updateQuery',{items})
    }
    catch(error){
        console.log(error);
        return error
    }
}

export const deleteRecord=async(items)=>{
    try{
        console.log(items);
        return await axios.delete(`http://localhost:8080/api/deleteRecord?rollNo=${items.rollNo}&hallName=${items.hallName}`)
    }
    catch(error){
        console.log(error);
        return error
    }
}

export const getRecords=async(items)=>{
    try {
        let {data}=await axios.get(`http://localhost:8080/api/getUsers?hallName=${items.hallName}`)
        return data
        
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getByRollNo=async(items)=>{
    try {
        console.log('hello');
        let {data}=await axios.get(`http://localhost:8080/api/getByRollNo?rollNo=${items.rollNo}`)
        // console.log(data.hallName);
        return data.hallName
    } catch (error) {
        console.log(error);
        return error
    }
}

export const getUserByRollNo=async(items)=>{
    try {
        console.log('hi');
        let {data}=await axios.get(`http://localhost:8080/api/getUserByRollNo?rollNo=${items.rollNo}&hallName=${items.hallName}`)
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
        return error
    }
}

// export const searchAny=async()=>{
//     try {
        
//         let {data}=await axios.get(`http://localhost:8080/api/searchRollNo?hrollNo=${items.hallName}`)
//         return data
        
//     } catch (error) {
//         console.log(error)
//         return error
//     }
// }



// export const updatDatabase=async(items)=>{
//     try {
//         return await axios.post('http://localhost:8080/sale',{items:items})
//     } catch (error) {
//         console.log(error);
//         return error
//     }
// }

// export const addToInventory=async(items)=>{
//     try {
//         return await axios.post('http://localhost:8080/newOrder',{items:items})
//     } catch (error) {
//         console.log(error);  
//     }
// }

// export const getNames=async()=>{
//     try {
//         return await axios.get('http://localhost:8080/getNames')
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const getExpiredMed=async()=>{
//     try {
//         return await axios.get('http://localhost:8080/getExpiredMed')
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getLowStockMed=async()=>{
//     try {
//         return await axios.get('http://localhost:8080/getLowStockMed')
//     } catch (error) {
//         console.log(error);
//     }
// }