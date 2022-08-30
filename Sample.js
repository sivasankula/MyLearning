const getParticularClass  = (headName,...data) => {
    data.map(CItem=>{
        if(CItem.SortDirection == sortRequested && CItem.headerName ==headName){
            if(problemsObject.sortedDirection){
                return 'icon-client-descending-order transition-icon'
            } else{
                return 'icon-client-descending asc-order'
            }
        }
    })
    return 'icon-sort-table'
}