class TestModel {
    userId: String;
    id: String;
    title: String;
    body: String;

    constructor(userId, title, body)
    {
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}

export default TestModel;