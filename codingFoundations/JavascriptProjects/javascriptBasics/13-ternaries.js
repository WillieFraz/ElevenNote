// Ternaries are Coondiitonal Operator.
    //1         //2     //3
    //(condition) ? run this code if true : run this code if false

    /*
        condition
            ? true code;
            ? false code;
    */

            let hamburgers = 10;
            if (hamburgers > 0) {
                console.log("Eat some sliders!");
            } else {
                console.log("We need to go buy some sliders!!");
            }

            hamburgers > 0 ? console.log("Pig Out") : console.log("buy some fooo");

            let isleaving = true;
            let message;

            isleaving ? message = "Sorry to see you go" : message = "Glad you are here";

            console.log(message)

            //Nested turnarie
            message = (hamburgers > 5)
            ?"You have plenty of hamburgers"
            : (hamburgers === 5)
                ? "You have 5 hamburgers"
                : "You should probably get more hamburgers.";

                console.log(message)