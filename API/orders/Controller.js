const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')
const { connect } = require('mongoose')
require('dotenv').config()
const Order = require('./Model')

const demoemail = async (req, res) => {
    const { customerEmail, customerName } = req.body

    if (!customerEmail || !customerName) {
        res.staus(403).json({ message: "Please Give Your Email" })
    }
    else {
        const config = {
            service: 'gmail',
            auth: {
                user: "zunnoor46@gmail.com",
                pass: "ltytvcxlarxylwcn"
            }
        }
        const transporter = nodemailer.createTransport(config);

        var mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Mailgen',
                link: 'https://mailgen.js/'
            }
        });

        var mailgenEmail = {
            body: {
                name: customerName,
                intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
                table: {
                    data: [{
                        name: customerName,
                        email: customerEmail,
                        token: "134645"
                    }]
                },
                outro: 'Need help, or have questions? Just reply to this customerEmail, we\'d love to help.'
            }
        };


        const response = {
            from: "zunnoor46@gmail.com",
            to: customerEmail,
            subject: "Hello",
            text: "Banoqabil",
            html: mailGenerator.generate(mailgenEmail)
        }
        try {
            await transporter.sendMail(response);
            res.json({ message: "Check" })

        } catch (error) {
            res.status(500).json({ error })
        }
    }
}

const addorder = async (req, res) => {
    const { items, totalBill, customerAddress, customerContact, customerEmail, customerName } = req.body

    if (!items || !totalBill || !customerAddress || !customerContact || !customerEmail || !customerName) {
        res.status(403).json({ message: "Invalid Payload" })
    }
    else {

        try {

            await connect(process.env.MONGO_URI)
            const order = await Order.create({ items, totalBill, customerAddress, customerContact, customerEmail, customerName })


            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "zunnoor46@gmail.com",
                    pass: "ltytvcxlarxylwcn"
                }
            });


            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    name: 'Eastern Bites',
                    link: 'https://mailgen.js/'
                }
            });

            await transporter.sendMail(
                {
                    from: "zunnoor46@gmail.com",
                    to: customerEmail,
                    subject: "Order",
                    text: "Banoqabil",
                    html: mailGenerator.generate({
                        body: {
                            name: customerName,
                            intro: 'Welcome to Eastern Bites! We serve Best Quality of Food in town.',
                            table: {
                                data: [{
                                    name: customerName,
                                    email: customerEmail,
                                    trakingId: order._id,
                                    Addresss: customerAddress,
                                    Contact: customerContact
                                }]
                            },
                            outro: 'Please make Sure that the above mentioned detail are correct!'
                        }
                    })
                }
            )
            res.status(201).json({
                message: "Order Placed Succesfully",
                TrackingId: order._id
            })

        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

const OrderbyId = async (req, res) => {

    const { _id } = req.params
    try {
        await connect(process.env.MONGO_URI)
        const order = await Order.findOne({ _id })
        res.json({ order })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const allorders = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const orders = await Order.find()
        res.json({ orders })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { demoemail, addorder, allorders, OrderbyId }