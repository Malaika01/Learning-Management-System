import crypto from 'crypto';

import asyncHandler from '../middlewares/asyncHAndler.middleware.js';
import Payment from '../models/payment.model.js';
import User from '../models/usermodel.js';
import AppError from "../utils/error.util.js";

// ❌ Razorpay disabled for now
// import { razorpay } from "../server.js";

/**
 * @GET_RAZORPAY_ID
 */
export const getRaZorpayApikey = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Razorpay disabled',
        key: null
    });
});

/**
 * @ACTIVATE_SUBSCRIPTION
 */
export const buySubscription = asyncHandler(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "Payment system disabled for now"
    });
});

/**
 * @VERIFY_SUBSCRIPTION
 */
export const verifySubscription = asyncHandler(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "Payment verification disabled"
    });
});

/**
 * @CANCEL_SUBSCRIPTION
 */
export const cancelSubscription = asyncHandler(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "Cancel subscription disabled"
    });
});

/**
 * @GET_ALL_PAYMENTS
 */
export const allPayments = asyncHandler(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "Payments system disabled",
        data: []
    });
});