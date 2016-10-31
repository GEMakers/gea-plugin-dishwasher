# Dishwasher
**General Electric Appliances Dishwasher Software Development Kit**

This node.js package provides functionality for communicating with a dishwasher via the [General Electric Appliance Software Development Kit](https://github.com/GEMakers/gea-sdk). In order to use this software, you must first connect your dishwasher to your computer using the [Green Bean](https://github.com/GEMakers/green-bean).

## Overview

1. [Using the Software](#using-the-software)
  - [dishwasher.cycleStatus](#dishwashercyclestatus)
  - [dishwasher.operatingMode](#dishwasheroperatingmode)
  - [dishwasher.disabledFeatures](#dishwasherdisabledfeatures)
  - [dishwasher.reminders](#dishwasherreminders)
  - [dishwasher.rates](#dishwasherrates)
  - [dishwasher.turbidityCalibration](#dishwasherturbiditycalibration)
  - [dishwasher.doorCount](#dishwasherdoorcount)
  - [dishwasher.userConfiguration](#dishwasheruserconfiguration)
  - [dishwasher.error](#dishwashererror)
  - [dishwasher.cycleCounts](#dishwashercyclecounts)
  - [dishwasher.continuousCycle](#dishwashercontinuouscycle)
  - [dishwasher.controlLock](#dishwashercontrollock)
  - [dishwasher.personality](#dishwasherpersonality)
  - [dishwasher.diverterCalibration](#dishwasherdivertercalibration)
  - [dishwasher.cycleState](#dishwashercyclestate)
  - [dishwasher.analogData](#dishwasheranalogdata)
  - [dishwasher.cycleData0](#dishwashercycledata0)
  - [dishwasher.cycleData1](#dishwashercycledata1)
  - [dishwasher.cycleData2](#dishwashercycledata2)
  - [dishwasher.cycleData3](#dishwashercycledata3)
  - [dishwasher.cycleData4](#dishwashercycledata4)
  - [dishwasher.dryDrainCounters](#dishwasherdrydraincounters)
  - [dishwasher.tubLight](#dishwashertublight)
1. [Appendix](#appendix)
  - [Operating mode](#operating-mode)
  - [Disabled features](#disabled-features)
  - [Reminders](#reminders)
  - [User configuration](#user-configuration)
  - [Control lock](#control-lock)
  - [Personality source](#personality-source)
  - [Cycle state](#cycle-state)

### Using the Software
Below are a few node.js applications that demonstrate how to use this package to interact with a dishwasher.

### *dishwasher.cycleStatus*
The cycle status is an object with the following fields:
- cycleRunning (zero if the cycle is not running, non-zero if running)
- activeCycle (the active cycle, see [cycle state](#cycle-state))
- activeCycleStep (the current step in the active cycle)
- stepsExecuted (the number of steps executed in the cycle)
- stepsEstimated (the estimated number of steps in the cycle)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleStatus.read(function (value) {
        console.log("cycle status is:", value);
    });

    dishwasher.cycleStatus.subscribe(function (value) {
        console.log("cycle status changed:", value);
    });

    dishwasher.cycleStatus.write({
        cycleRunning: 1,
        activeCycle: 2,
        activeCycleStep: 1,
        stepsExecuted: 1,
        stepsEstimated: 2
    });
});
```

### *dishwasher.operatingMode*
The operating mode is an integer value of the [operating mode](#operating-mode) enumeration.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.operatingMode.read(function (value) {
        console.log("operating mode is:", value);
    });

    dishwasher.operatingMode.subscribe(function (value) {
        console.log("operating mode changed:", value);
    });

    dishwasher.operatingMode.write(1);
});
```

### *dishwasher.disabledFeatures*
The disabled features are an integer value of the [disabled features](#disabled-features) bit field.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.disabledFeatures.read(function (value) {
        console.log("disabled features are:", value);
    });

    dishwasher.disabledFeatures.subscribe(function (value) {
        console.log("disabled features changed:", value);
    });

    dishwasher.disabledFeatures.write(3);
});
```

### *dishwasher.reminders*
The reminders are an integer value of the [reminders](#reminders) bit field.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.reminders.read(function (value) {
        console.log("reminders are:", value);
    });

    dishwasher.reminders.subscribe(function (value) {
        console.log("reminders changed:", value);
    });

    dishwasher.reminders.write(0);
});
```

### *dishwasher.rates*
The rates are an object with the following fields:
- fillRate (the rate that water fills)
- drainRate (the rate that water drains)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.rates.read(function (value) {
        console.log("rates are:", value);
    });

    dishwasher.rates.subscribe(function (value) {
        console.log("rates changed:", value);
    });

    dishwasher.rates.write({
        fillRate: 0,
        drainRate: 0
    });
});
```

### *dishwasher.turbidityCalibration*
The turbidity calibration is an integer value used to calibrate the sensor readings.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.turbidityCalibration.read(function (value) {
        console.log("turbidity calibration is:", value);
    });

    dishwasher.turbidityCalibration.subscribe(function (value) {
        console.log("turbidity calibration changed:", value);
    });

    dishwasher.turbidityCalibration.write(0);
});
```

### *dishwasher.doorCount*
The door count is a read-only integer value that is incremented each time the door is opened.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.doorCount.read(function (value) {
        console.log("door count is:", value);
    });

    dishwasher.doorCount.subscribe(function (value) {
        console.log("door count changed:", value);
    });
});
```

### *dishwasher.userConfiguration*
The user configuration is an array of bytes representing the [user configuration](#user-configuration) bit field.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.userConfiguration.read(function (value) {
        console.log("user configuration is:", value);
    });

    dishwasher.userConfiguration.subscribe(function (value) {
        console.log("user configuration changed:", value);
    });

    dishwasher.userConfiguration.write([0, 0, 0]);
});
```

### *dishwasher.error*
The error is an object with the following fields:
- errorId (the error id)
- errorState (zero if the error is cleared, one if the error is set)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.error.read(function (value) {
        console.log("error is:", value);
    });

    dishwasher.error.subscribe(function (value) {
        console.log("error changed:", value);
    });

    dishwasher.error.write({
        errorId: 0,
        errorState: 1
    });
});
```

### *dishwasher.cycleCounts*
The cycle counts are an object with the following fields:
- startedCount (the number of times a cycle was started)
- completedCount (the number of times a cycle was completed)
- resetCount (the number of times a cycle was reset)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleCounts.read(function (value) {
        console.log("cycle counts are:", value);
    });

    dishwasher.cycleCounts.subscribe(function (value) {
        console.log("cycle counts changed:", value);
    });

    dishwasher.cycleCounts.write({
        startedCount: 2,
        completedCount: 1,
        resetCount: 0
    });
});
```

### *dishwasher.continuousCycle*
The cycle counts are an object with the following fields:
- cycleToRun (the cycle to run, see [cycle state](#cycle-state))
- cyclesRemaining (the number of remaining cycles)
- minutesBetweenCycles (the number of minutes between cycles)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.continuousCycle.read(function (value) {
        console.log("continuous cycle is:", value);
    });

    dishwasher.continuousCycle.subscribe(function (value) {
        console.log("continuous cycle changed:", value);
    });

    dishwasher.continuousCycle.write({
        cycleToRun: 1,
        cyclesRemaining: 0,
        minutesBetweenCycles: 5
    });
});
```

### *dishwasher.controlLock*
The control lock is an integer value of the [control lock](#control-lock) enumeration.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.controlLock.read(function (value) {
        console.log("control lock is:", value);
    });

    dishwasher.controlLock.subscribe(function (value) {
        console.log("control lock changed:", value);
    });

    dishwasher.controlLock.write(0x55);
});
```

### *dishwasher.personality*
The personality is an object with the following fields:
- personality (the personality index, between 0 and 15, inclusive)
- source (the cycle to run, see [personality source](#personality-source))

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.personality.read(function (value) {
        console.log("personality is:", value);
    });

    dishwasher.personality.subscribe(function (value) {
        console.log("personality changed:", value);
    });

    dishwasher.personality.write({
        personality: 15,
        source: 1
    });
});
```

### *dishwasher.diverterCalibration*
The diverter calibration is an object with the following fields:
- positionATime (the time at position A)
- positionBTime (the time at position B)
- positionCTime (the time at position C)
- positionDTime (the time at position D)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.diverterCalibration.read(function (value) {
        console.log("diverter calibration is:", value);
    });

    dishwasher.diverterCalibration.subscribe(function (value) {
        console.log("diverter calibration changed:", value);
    });

    dishwasher.diverterCalibration.write({
        positionATime: 1,
        positionBTime: 2,
        positionCTime: 3,
        positionDTime: 4
    });
});
```

### *dishwasher.cycleState*
The cycle state is an integer value of the [cycle state](#cycle-state) enumeration.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleState.read(function (value) {
        console.log("cycle state is:", value);
    });

    dishwasher.cycleState.subscribe(function (value) {
        console.log("cycle state changed:", value);
    });

    dishwasher.cycleState.write(9);
});
```

### *dishwasher.analogData*
The analog data is a read-only byte array of analog input sensor values.

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.analogData.read(function (value) {
        console.log("analog data is:", value);
    });

    dishwasher.analogData.subscribe(function (value) {
        console.log("analog data changed:", value);
    });
});
```

### *dishwasher.cycleData0*
The cycle data is a read-only object with the following fields:
- cycleTime (the time of the cycle)
- cycleDurationInMinutes (the duration of the cycle in minutes)
- cycleCompleted (zero if the cycle is not complete, one if incomplete)
- cycleMinimumTemperatureInFahrenheit (the minimum cycle temperature in Fahrenheit)
- cycleMaximumTemperatureInFahrenheit (the maximum cycle temperature in Fahrenheit)
- cycleFinalCirculationTemperatureInFahrenheit (the final circulation temperature in Fahrenheit)
- cycleMinimumTurbidityInNTU (the minimum turbidity value in NTU)
- cycleMaximumTurbidityInNTU (the maximum turbidity value in NTU)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleData0.read(function (value) {
        console.log("cycle data 0 is:", value);
    });

    dishwasher.cycleData0.subscribe(function (value) {
        console.log("cycle data 0 changed:", value);
    });
});
```

### *dishwasher.cycleData1*
The cycle data is a read-only object with the following fields:
- cycleTime (the time of the cycle)
- cycleDurationInMinutes (the duration of the cycle in minutes)
- cycleCompleted (zero if the cycle is not complete, one if incomplete)
- cycleMinimumTemperatureInFahrenheit (the minimum cycle temperature in Fahrenheit)
- cycleMaximumTemperatureInFahrenheit (the maximum cycle temperature in Fahrenheit)
- cycleFinalCirculationTemperatureInFahrenheit (the final circulation temperature in Fahrenheit)
- cycleMinimumTurbidityInNTU (the minimum turbidity value in NTU)
- cycleMaximumTurbidityInNTU (the maximum turbidity value in NTU)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleData1.read(function (value) {
        console.log("cycle data 1 is:", value);
    });

    dishwasher.cycleData1.subscribe(function (value) {
        console.log("cycle data 1 changed:", value);
    });
});
```

### *dishwasher.cycleData2*
The cycle data is a read-only object with the following fields:
- cycleTime (the time of the cycle)
- cycleDurationInMinutes (the duration of the cycle in minutes)
- cycleCompleted (zero if the cycle is not complete, one if incomplete)
- cycleMinimumTemperatureInFahrenheit (the minimum cycle temperature in Fahrenheit)
- cycleMaximumTemperatureInFahrenheit (the maximum cycle temperature in Fahrenheit)
- cycleFinalCirculationTemperatureInFahrenheit (the final circulation temperature in Fahrenheit)
- cycleMinimumTurbidityInNTU (the minimum turbidity value in NTU)
- cycleMaximumTurbidityInNTU (the maximum turbidity value in NTU)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleData2.read(function (value) {
        console.log("cycle data 2 is:", value);
    });

    dishwasher.cycleData2.subscribe(function (value) {
        console.log("cycle data 2 changed:", value);
    });
});
```

### *dishwasher.cycleData3*
The cycle data is a read-only object with the following fields:
- cycleTime (the time of the cycle)
- cycleDurationInMinutes (the duration of the cycle in minutes)
- cycleCompleted (zero if the cycle is not complete, one if incomplete)
- cycleMinimumTemperatureInFahrenheit (the minimum cycle temperature in Fahrenheit)
- cycleMaximumTemperatureInFahrenheit (the maximum cycle temperature in Fahrenheit)
- cycleFinalCirculationTemperatureInFahrenheit (the final circulation temperature in Fahrenheit)
- cycleMinimumTurbidityInNTU (the minimum turbidity value in NTU)
- cycleMaximumTurbidityInNTU (the maximum turbidity value in NTU)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleData3.read(function (value) {
        console.log("cycle data 3 is:", value);
    });

    dishwasher.cycleData3.subscribe(function (value) {
        console.log("cycle data 3 changed:", value);
    });
});
```

### *dishwasher.cycleData4*
The cycle data is a read-only object with the following fields:
- cycleTime (the time of the cycle)
- cycleDurationInMinutes (the duration of the cycle in minutes)
- cycleCompleted (zero if the cycle is not complete, one if incomplete)
- cycleMinimumTemperatureInFahrenheit (the minimum cycle temperature in Fahrenheit)
- cycleMaximumTemperatureInFahrenheit (the maximum cycle temperature in Fahrenheit)
- cycleFinalCirculationTemperatureInFahrenheit (the final circulation temperature in Fahrenheit)
- cycleMinimumTurbidityInNTU (the minimum turbidity value in NTU)
- cycleMaximumTurbidityInNTU (the maximum turbidity value in NTU)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.cycleData4.read(function (value) {
        console.log("cycle data 4 is:", value);
    });

    dishwasher.cycleData4.subscribe(function (value) {
        console.log("cycle data 4 changed:", value);
    });
});
```

### *dishwasher.dryDrainCounters*
The dry drain counters are an object with the following fields:
- noDryDrainDetectedCount (the number of times a dry-drain did not occur)
- noDryDrainDetectedMaximumValue (the maximum value a dry-drain cannot occur)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.dryDrainCounters.read(function (value) {
        console.log("dry drain counters are:", value);
    });

    dishwasher.dryDrainCounters.subscribe(function (value) {
        console.log("dry drain counters changed:", value);
    });

    dishwasher.dryDrainCounters.write({
        noDryDrainDetectedCount: 5,
        noDryDrainDetectedMaximumValue: 45
    });
});
```

### *dishwasher.tubLight*
The tub light is an object with the following field:
- dutyCyclePercentage (the duty cycle percentage between 0 and 100, inclusive)

``` javascript
var greenBean = require("green-bean");

greenBean.connect("dishwasher", function(dishwasher) {
    dishwasher.tubLight.read(function (value) {
        console.log("tub light is:", value);
    });

    dishwasher.tubLight.subscribe(function (value) {
        console.log("tub light changed:", value);
    });

    dishwasher.tubLight.write({
        dutyCyclePercentage: 50
    });
});
```

## Appendix

### Operating mode
The following is a list of the available operating modes and their enumerated value.

| Value   | Name                 |
|:-------:|:---------------------|
| 0       | Low Power            |
| 1       | Power Up             |
| 2       | Standby              |
| 3       | Delay Start          |
| 4       | Pause                |
| 5       | Cycle Active         |
| 6       | End of Cycle         |
| 7       | Download Mode        |
| 8       | Sensor Check Mode    |
| 9       | Load Activation Mode |

### Disabled features
The following is a diagram of the value for each bit in the disabled features.
If the bit is set (value is 1) then that feature is disabled.
If the bit is cleared (value is 0) then that feature is enabled.

| Bit     | Description              |
|:-------:|:-------------------------|
| 0       | Heated Dry               |
| 1       | Boost                    |
| 2       | Sanitize                 |
| 3       | Wash Zones               |
| 4       | Steam                    |
| 5       | Bottle Blast             |
| 6+      | Reserved                 |

### Reminders
The following is a diagram of the value for each bit in the reminders.
If the bit is set (value is 1) then the reminder is active.
If the bit is cleared (value is 0) then the reminders is not active.

| Bit     | Description              |
|:-------:|:-------------------------|
| 0       | Clean Filter             |
| 1       | Add Rinse Aid            |
| 2       | Sanitized                |

### User configuration
The following is a diagram of the value for each bit in the user configuration.
There are three configuration bytes, each described below.

| Bit     | Description    |
|:-------:|:---------------|
| 0-3     | Delay Start    |
| 4-5     | Zone Selected  |
| 6       | Demo Mode      |
| 7       | Mute           |

| Bit     | Description         |
|:-------:|:--------------------|
| 0       | Steam               |
| 1       | UI Locked           |
| 2-3     | Dry Options         |
| 4-6     | Wash Temp           |
| 7       | Rinse Aid Enabled   |

| Bit     | Description         |
|:-------:|:--------------------|
| 0       | Bottle Blast        |
| 1-4     | Selected Cycle      |
| 5       | Leak Detect Enabled |
| 6+      | Reserved            |

### Control lock
The following is a list of the available control locks and their enumerated value.

| Value   | Name     |
|:-------:|:---------|
| 0x55    | Locked   |
| 0xAA    | Unlocked |

### Personality source
The following is a list of the available personality sources and their enumerated value.

| Value   | Name                  |
|:-------:|:----------------------|
| 0       | Bootloader Parametric |
| 1       | A/D                   |

### Cycle state
The following is a list of the available cycle states and their enumerated value.

| Value   | Name                    |
|:-------:|:------------------------|
| 1       | PreWash                 |
| 2       | Sensing                 |
| 3       | MainWash                |
| 4       | Drying                  |
| 5       | Sanitizing              |
| 6       | Turbidity Calibration   |
| 7       | Diverter Calibration    |
| 8       | Pause                   |
| 9       | Rinsing                 |
| 10      | Cycle Inactive          |
