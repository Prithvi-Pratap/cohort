// Zod is a TypeScript-first library for data validation and schema declaration. It's designed to make it easy to define, validate, and sanitize data in a type-safe manner.
//schema: schema is a definition or set of rules that describe the structure ,constraints and properties of the data.

// const express = require('express');
// const zod = require('zod');
// const app = express();

// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post('/health-checkup', (req, res) => {
//     const kidneys = req.body.kidneys;
//     try {
//         const response = schema.safeParse(kidneys);
//         res.send({ response });
//     }
//     catch (err) {
//         res.status(411, () => console.error(err))
//     }
// });

// app.listen(3000)

const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const result = schema.safeParse(kidneys); //while using safeParse, don't use the try catch block , as the ZOD doesn't throw any exceptions,  instead it returns an object with the 'success' property true/false, due to which the catch block will not get triggered

    if (result.success) {
        res.send({ response: result.data });
    } else {
        console.error(result.error);
        res.status(411).send('Length Requirement Not Met');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
