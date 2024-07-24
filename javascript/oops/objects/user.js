class user{
    current_year=2024
// year is parameetar
    cal_age(year){
        return this.current_year-year
    }
}

let user1=new user()
console.log(user1.cal_age(2003))

let user2=new user()
console.log(user2.cal_age(2004))