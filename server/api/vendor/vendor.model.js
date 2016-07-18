'use strict';

import mongoose from 'mongoose';
import {Schema} from 'mongoose';

var VendorSchema = new mongoose.Schema({
    vendorName: String,
    vendorAddress: String,
    vendorDescription: String,
    category: [{
        type: String
    }],
    point: {
        type: Number,
        'default': 10
    },
    _owner: {
            type: Schema.ObjectId,
            ref: 'User'
        }
    // info: String,
    // active: Boolean
});

export
default mongoose.model('Vendor', VendorSchema);