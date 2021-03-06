class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        this.title.html("Quizzer");
        this.title.position(350, 0);

        this.question.html("Question:- What starts and ends with the letter 'E', but only has 1 letter? ");
        this.question.position(150,80);

        this.option1.html("1: Everyone");
        this.option1.position(150,100);

        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.option3.html("3: E");
        this.option3.position(150,140);

        this.input1.position(150,230);
    
    }

}