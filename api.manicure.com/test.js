function TestCall(testLable, testFuncCall) {

    let testResult = null;
    let successResult = false;
    try {
        testResult = testFuncCall();
        successResult = true;
    } catch (ex) {
        testResult = ex;
    }

    console.log("Test " + (successResult === true ? "Success" : "Failed") + ": " + testLable, testResult);

}

const TestRoute = {
    autoRoute: () => {
        const Route = require("./app/modules/core/AutoRouter");
        let r = new Route();

        const express = require("express");
        const app = express();

        TestCall("AutoRouter Test", () => {
            return r.start(app);
        });
    }
}

TestRoute.autoRoute();