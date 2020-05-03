

import React from 'react'

const MainHelper = {
    deleteUserFromState
    }
  
  
    
    function deleteUserFromState(id,users) {
        return users.filter(user => user.id !== id)
        
    }
    export default MainHelper;