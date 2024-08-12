import express from 'express';
import parse from 'body-parser';

const app = express();
const PORT = 3000;

let blogs = [
    { title: 'First Blog', description: 'This is the first blog post.' },
    { title: 'Second Blog', description: 'This is the second blog post.' }
];

let contacts = [
    { name: 'John', email: 'johndoe@me.com', phone: '555-555-5555' },]

app.use(parse.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { blogs });
});

app.post('/add-blog', (req, res) => {
    console.log('Adding blog:', req.body);
    const { title, description } = req.body;
    blogs.push({ title, description });
    res.redirect('/');
});

app.post('/delete-blog', (req, res) => {
    console.log('Deleting blog at index:', req.body.index);
    const index = req.body.index;
    blogs.splice(index, 1);
    res.redirect('/');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    console.log('Adding contact:', req.body);
    const { name, email, phone } = req.body;
    contacts.push({ name, email, phone });
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

