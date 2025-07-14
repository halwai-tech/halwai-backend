import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('✅ Halwai backend running!');
});
// ✅ Local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
}
// ✅ For Vercel: export the app directly
export default app;
