const { check, validationResult } = require("express-validator");
const Area = require("./model");

const areaValidator = [
    check("area_name")
        .not()
        .isEmpty()
        .withMessage("Area name is required")
        .isLength({ min: 3 })
        .withMessage("Area name must be at least 3 characters long")
        .custom(async(area_name) => {
            try{
                const area = await Area.findOne({where: {area_name: area_name}});
                if(area){
                    throw new Error('Area name is already used!');
                }
            }
            catch(err){
                throw new Error(err.message);
            }
        })  
        .trim(),
    check("area_phone")
        .isLength({ min: 11 })
        .isMobilePhone('bn-BD', {
            strictMode: true
        })
        .withMessage("Area phone number must be at least 11 characters long")
        .custom(async(area_phone) => {
            try{
                const area = await Area.findOne({where: {area_phone: area_phone}});
                if(area){
                    throw new Error('Mobile number is already used!');
                }
            }
            catch(err){
                throw new Error(err.message);
            }
        }),
    check("area_address")
        .isLength({ min: 3 })
        .withMessage("Area address must be at least 3 characters long")
        .trim(),
]

areaDataFilterHandler = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();

    if(Object.keys(mappedErrors).length === 0){
        next();
    }
    else{
        res.status(500).json({
            errors: mappedErrors
        });
    }
};

module.exports = {
    areaValidator,
    areaDataFilterHandler
}