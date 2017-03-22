import "reflect-metadata";
import { ConnectionOptions } from "typeorm";
import { createConnectedApp } from "./lib/app";
import { SuperTest, Test } from "supertest";
import * as supertest from "supertest";

let options: ConnectionOptions = {
    driver: {
        type: "sqlite",
        storage: ":memory:"
    },
    entities: [
        __dirname + "./entity/*.js"
    ],
    autoSchemaSync: true
};

/**
 * Get an Application instance wrapped in SuperTest
 * for use in unit tests
 */
export function getTestApp(): Promise<SuperTest<Test>> {
    return createConnectedApp(options).then(app => supertest(app));
}
