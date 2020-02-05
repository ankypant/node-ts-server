import express from 'express';

const app = express();

app.listen({ port: 4000 }, () => {
    console.log(`Apollo Server on http://localhost:4000/graphql`);
});