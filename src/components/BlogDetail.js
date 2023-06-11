const BlogDetail = ( { title, entry, date, id }) => {
    console.log(title)
    console.log(entry)
    console.log(date)
    let year = date.slice(0,4)
    let monthNum = date.slice(5,7)
    let day = date.slice(8,10)
    const findMonth = (monthNum) =>{
        switch (monthNum){
            case '01':
                return "January"
                break
            case '02':
                return "February"
                break
            case '03':
                return "March"
                break
            case '04':
                return "April"
                break
            case '05':
                return "May"
                break
            case '06':
                return "June"
                break
            case '07':
                return "July"
                break
            case '08':
                return "August"
                break
            case '09':
                return "September"
                break
            case '10':
                return "October"
                break
            case '11':
                return "November"
                break
            case '12':
                return "December"
                break
        }
    }
    let month = findMonth(monthNum)
    console.log(year)
    console.log(monthNum)
    console.log(month)
    console.log(day)
    let revDate = month + " " + day + "," + year
    console.log(revDate)
    if (id === 6 || id === 9 || id === 10 || id === 11) {
        return null
    }
    return(
      
        <div>
            <h1> {title} </h1>
            <h3> {revDate} </h3>
            <p> {entry} </p>
        </div>
        
    )
}
export default BlogDetail