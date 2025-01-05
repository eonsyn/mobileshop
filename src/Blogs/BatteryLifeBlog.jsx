import React from "react";

const BatteryLifeBlog = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
        How to Maintain Your Smartphone's Battery Life
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        A smartphone's battery is one of the most important components, and
        maintaining it properly can help ensure your device lasts longer. Here
        are some dos and don'ts of battery maintenance to get the most out of
        your smartphone's power.
      </p>

      <div className="mb-8">
        <img
          src="https://www.batteriesplus.com/4a7cc0/globalassets/blog/hero-images/power/cellphone-charging-tips.jpg"
          alt="Smartphone battery maintenance"
          className="w-full h-72 object-cover rounded-md shadow-lg"
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-medium text-gray-900">
          Do: Keep Your Battery Between 20% and 80%
        </h2>
        <p className="text-gray-700">
          To prolong battery lifespan, avoid charging your smartphone to 100% or
          letting it drain below 20%. Charging in this range reduces wear and
          tear on the battery, helping it last longer.
        </p>

        <h2 className="text-2xl font-medium text-gray-900">
          Don't: Leave Your Phone Charging Overnight
        </h2>
        <p className="text-gray-700">
          Leaving your phone plugged in overnight may lead to overcharging,
          which can affect the battery's long-term health. Try to unplug it once
          it reaches 100%, or use a smart charger that stops charging once the
          battery is full.
        </p>

        <h2 className="text-2xl font-medium text-gray-900">
          Do: Use Power Saving Modes
        </h2>
        <p className="text-gray-700">
          Most smartphones come with power-saving modes that can reduce battery
          consumption. Enable these modes during times when you need to conserve
          energy, such as when traveling or during long meetings.
        </p>

        <h2 className="text-2xl font-medium text-gray-900">
          Don't: Let Your Phone Heat Up
        </h2>
        <p className="text-gray-700">
          Overheating can degrade your battery's performance. Avoid using your
          phone in direct sunlight or placing it on hot surfaces. Also, remove
          the case if it causes the phone to overheat while charging.
        </p>

        <h2 className="text-2xl font-medium text-gray-900">
          Do: Turn Off Unnecessary Features
        </h2>
        <p className="text-gray-700">
          Disable features like Bluetooth, Wi-Fi, or location services when
          you're not using them. These features consume battery power even when
          they are idle, so turning them off can help extend battery life.
        </p>
      </div>

      <p className="text-lg text-gray-700 mt-8">
        Following these simple tips can significantly improve your smartphone's
        battery life. For more battery care advice or to explore the latest
        smartphones, visit <strong>Narayan Mobile Shop</strong>!
      </p>
    </div>
  );
};

export default BatteryLifeBlog;
