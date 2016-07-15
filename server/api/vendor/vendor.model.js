'use strict';

import mongoose from 'mongoose';

var VendorSchema = new mongoose.Schema({
    vendorName: String,
    owner: {
        id: {
            type: String,
            ref: 'User'
        },
        name: {
            type: String
        },
        email: {
            type: 'String'
        },
        phone: {
            type: 'String'
        }
    },
    vendorAddress: String,
    info: String,
    active: Boolean
});

export
default mongoose.model('Vendor', VendorSchema);