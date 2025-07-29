import { Request, Response } from "express";
import Item from "../models/Item.model.js";
import EventBooking from "../models/EventBooking.model.js";
import mongoose from "mongoose";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const {
      eventName,
      eventDate,
      servingTime,
      numberOfPersons,
      discount,
      taxes,
      miscCharges,
      isSelfCooked,
      items,
      paymentStatus,
      orderStatus,
      customerId,
      halwaiId,
      specialInstructions,
      venueAddress,
    } = req.body;

    let totalCharges = 0;
    const pricedItems = await Promise.all(
      items.map(async (i: any) => {
        const item = await Item.findById(i.item);
        if (!item) throw new Error(`Item not found: ${i.item}`);

        //  price logic
        const price = Math.round(
          (item.priceRange.min + item.priceRange.max) / 2
        );

        const itemTotal = price * i.quantity;
        totalCharges += itemTotal;

        return {
          item: new mongoose.Types.ObjectId(i.item),
          quantity: i.quantity,
          price,
        };
      })
    );

    const booking = new EventBooking({
      eventName,
      eventDate,
      servingTime,
      numberOfPersons,
      totalCharges,
      discount,
      taxes,
      miscCharges,
      isSelfCooked,
      items: pricedItems,
      paymentStatus,
      orderStatus,
      customerId,
      halwaiId,
      specialInstructions,
      venueAddress,
    });

    await booking.save();
    res
      .status(201)
      .json({ message: "Your Event is Booked Successfully.", data: booking });
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          error instanceof Error ? error.message : "Error in Event Booking!",
      });
  }
};
