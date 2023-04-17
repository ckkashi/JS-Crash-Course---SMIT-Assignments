function random_password(){
    let rand = Math.random();
    let new_pass = Math.floor(rand*1984635284657397859).toString(16);
    return new_pass;
}