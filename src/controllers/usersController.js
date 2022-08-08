import User from '../models/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function getUser(req,res){
    try
    {
        const users = await User.findAll();
        res.json({
            data: users
        });
    }catch(e)
    {
        console.log(e);
    }
}

export async function createUser(req,res){
    let { usrname,pass,name,gender,age,phone,birthdate} = req.body;

    pass = await encriptarPass(pass);

    try{
        let newUser = await User.create({usrname,pass,name,gender,age,phone,birthdate}, {
            fields: ['usrname','pass','name','gender','age','phone','birthdate']
        });

        if (newUser){
            let id = newUser.id;

            const token = jwt.sign({id}, process.env.JWT_KEY, {
                expiresIn: 60 * 5 * 24
            });

            return res.json({
                message: 'User successfully created',
                data: newUser,
                auth: true,
                token
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'Something went wrong',
            data: {}
        });
    }

}

export async function getUserById(req,res){
    const { id } = req.params;
    const user = await User.findOne({
        where: {
            id
        }
    })
    res.json(user)
}

export async function deleteUser(req,res)
{
    const { id } = req.params;
    const deleteRowCount = await User.destroy({
            where: {
                id
            }
    });
    if (deleteRowCount > 0){
        res.json({
            message: 'User successfully deleted',
            count: deleteRowCount
        });
    }else{
        res.json({
            message: 'That user didnt exist.',
            count: deleteRowCount
        });
    }
    
}

export async function updateUser(req,res)
{
    const { id } = req.params;
    let { usrname, pass, name, gender, age, phone, birthdate } = req.body;

    pass = await encriptarPass(pass);

    try{
        const users = await User.findAll({
            attributes: ['id','usrname','pass','name','gender','age','phone','birthdate'],
            where: {
                id
            }
        });
        if(users.length > 0)
        {
            users.forEach(async user => {
                await user.update({
                    usrname,
                    pass,
                    name,
                    gender,
                    age,
                    phone,
                    birthdate               
                });
            })
        }
    
        return res.json({
            message: 'User successfully updated',
            data: users
        })
    }catch(e){
        console.log(e);
    }
    
}

export async function Login(req,res){

    const {usrname, pass} = req.body;
    const user = await User.findOne({
        where: {
            usrname: usrname
        }
    });

    if (!user){
        return res.status(404).send('User doesnt exist.')
    }

    const passValido = await validarPass(pass,user.pass);

    if (!passValido)
    {
        return res.status(404).send('Wrong Pass.');
    }

    let id = user.id;
    
    const token = jwt.sign({id}, process.env.JWT_KEY, {
        expiresIn: 60 * 60 * 24
    });

    return res.json({
        message: 'User logged in',
        data: user,
        auth: true,
        token
    });
}

async function encriptarPass(password){
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
}

async function validarPass(pass,passbd){
    return bcrypt.compare(pass, passbd);
}