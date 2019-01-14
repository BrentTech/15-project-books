'use strict';
const util = require('util');
class dataModel {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }

  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(_id, record) {
    let test = this.schema.findByIdAndUpdate(_id, record, {new:true});
    console.log(`in the put method: ${util.inspect(test)}`);
    return test;
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }

}

module.exports = dataModel;
