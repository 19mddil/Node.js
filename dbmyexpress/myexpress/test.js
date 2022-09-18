const bcrypt = require('bcrypt');

//salt
const getSalt = async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash('12345678', salt);
    console.log(hashedPass);
}

getSalt();