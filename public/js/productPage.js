let sortBy = (value) =>{

    if (value === 'lowToHigh') {
            sorting(1)
        } else if (value === 'highToLow') {
            sorting(-1)
        }else if(value==="newest"){
            window.location.href = `http://localhost:5000/products`
        }
    }


    function sorting(x) {

        window.location.href = `http://localhost:5000/products/${x}/sort`

    }
