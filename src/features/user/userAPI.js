export function fetchLoggedInUserOrders(userId) {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:3000/orders/?user.id='+userId) 
      const data = await response.json()
      resolve({data})
    }
    );
  }