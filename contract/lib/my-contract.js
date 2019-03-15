/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class MyContract extends Contract {

    async instantiate(ctx) {
        let greeting = {
            text: 'Instantiate was called'
        };
        await ctx.stub.putState('GREETING', Buffer.from(JSON.stringify(greeting)));
    }

    async createCar(ctx, id, color, manufacturer, owner) {
        let car = {
            id: id,
            color: color,
            manufacturer: manufacturer,
            owner: owner
        };
        await ctx.stub.putState(id, Buffer.from(JSON.stringify(car)));
        return JSON.stringify(car);
    }

    async findCar(ctx, key) {
        let returnAsBytes = await ctx.stub.getState(key);
        let result = JSON.parse(returnAsBytes);
        return JSON.stringify(result);
    }
}

module.exports = MyContract;
