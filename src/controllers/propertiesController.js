import Property from '../models/Properties.js';

export async function getProperties(req,res)
{
    try
    {
        const properties = await Property.findAll();
        res.json({
            data: properties
        });
    }catch(e)
    {
        console.log(e);
    }
}

export async function createProperty(req,res)
{
    const { name,description,price,quantity} = req.body;
    try{
        let newProperty = await Property.create({
            name,
            description,
            price,
            quantity
        }, {
            fields: ['name','description','price','quantity']
        });
        if (newProperty){
            return res.json({
                message: 'Property successfully created',
                data: newProperty
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

export async function getPropertyById(req,res)
{
    const { id } = req.params;
    const properties = await Property.findOne({
        where: {
            id
        }
    })
    res.json(properties)
}

export async function deleteProperty(req,res)
{
    const { id } = req.params;
    const deleteRowCount = await Property.destroy({
            where: {
                id
            }
    });

    if(deleteRowCount != 0){
        res.json({
            message: 'Property successfully deleted',
            count: deleteRowCount
        });
    }else{
        res.json({
            message: 'That property didnt exist.',
            count: deleteRowCount
        });
    }
    
}

export async function updateProperty(req,res)
{
    const { id } = req.params;
    const { name,description,price,quantity } = req.body;


    try{
        const properties = await Property.findAll({
            attributes: ['id','name','description','price','quantity'],
            where: {
                id
            }
        });
        if(properties.length > 0)
        {
            properties.forEach(async Property => {
                await Property.update({
                    name,
                    description,
                    price,
                    quantity              
                });
            })
        }
    
        return res.json({
            message: 'Property successfully updated',
            data: properties
        })
    }catch(e){
        console.log(e);
    }
}