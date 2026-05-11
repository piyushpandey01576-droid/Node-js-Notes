function page2 (req, resp) {
    resp.write(`
        <form action="/html/submit">
        <input type="text" placeholder="usenmae">
        <input type="password"placeholder="password">
        <button>Submit</button>
        </form>
        `);
}

module.exports = page2;