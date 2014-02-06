/*
 * Copyright (c) 2014 - General Electric - Confidential - All Rights Reserved
 * 
 * Author: Christopher Baker <christopher.baker2@ge.com>
 *  
 */

const DISHWASHER_BASE = 0x3000;

function DishWasher (bus, appliance, base) {
    appliance.cycleStatus = appliance.erd({
        erd: base++,
        format: [
            "cycleRunning:UInt8",
            "activeCycle:UInt8",
            "activeCycleStep:UInt8",
            "stepsExecuted:UInt8",
            "stepsEstimated:UInt8"
        ]
    });
    
    appliance.operatingMode = appliance.erd({
        erd: base++,
        format: "UInt8"
    });
    
    appliance.disabledFeatures = appliance.erd({
        erd: base++,
        format: "UInt8"
    });
    
    appliance.reminders = appliance.erd({
        erd: base++,
        format: "UInt8"
    });
    
    appliance.rates = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "fillRate:UInt16",
            "drainRate:UInt16"
        ]
    });
    
    appliance.turbidityCalibration = appliance.erd({
        erd: base++,
        format: "UInt8"
    });
    
    appliance.doorCount = appliance.erd({
        erd: base++,
        endian: "big",
        format: "UInt16"
    });
    
    appliance.userConfiguration = appliance.erd({
        erd: base++,
        format: "Bytes"
    });
    
    appliance.error = appliance.erd({
        erd: base++,
        format: [
            "errorId:UInt8",
            "errorState:UInt8"
        ]
    });
    
    appliance.cycleCounts = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "startedCount:UInt16",
            "completedCount:UInt16",
            "resetCount:UInt16"
        ]
    });
    
    appliance.continuousCycle = appliance.erd({
        erd: base++,
        format: [
            "cycleToRun:UInt8",
            "cyclesRemaining:UInt8",
            "minutesBetweenCycles:UInt8"
        ]
    });
    
    appliance.controlLock = appliance.erd({
        erd: base++,
        format: "UInt8"
    });
    
    appliance.personality = appliance.erd({
        erd: base++,
        format: [
            "personality:UInt8",
            "source:UInt8"
        ]
    });
    
    appliance.diverterCalibration = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "positionATime:UInt16",
            "positionBTime:UInt16",
            "positionCTime:UInt16",
            "positionDTime:UInt16"
        ]
    });
    
    appliance.cycleState = appliance.erd({
        erd: base++,
        format: "UInt8"
    });
    
    appliance.analogData = appliance.erd({
        erd: base++,
        format: "Bytes"
    });
    
    appliance.cycleData0 = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "cycleTime:UInt32",
            "cycleNumber:UInt8",
            "cycleDurationInMinutes:UInt8",
            "cycleCompleted:UInt8",
            "cycleMinimumTemperatureInFahrenheit:UInt8",
            "cycleMaximumTemperatureInFahrenheit:UInt8",
            "cycleFinalCirculationTemperatureInFahrenheit:UInt8",
            "cycleMinimumTurbidityInNTU:UInt16",
            "cycleMaximumTurbidityInNTU:UInt16"
        ]
    });
    
    appliance.cycleData1 = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "cycleTime:UInt32",
            "cycleNumber:UInt8",
            "cycleDurationInMinutes:UInt8",
            "cycleCompleted:UInt8",
            "cycleMinimumTemperatureInFahrenheit:UInt8",
            "cycleMaximumTemperatureInFahrenheit:UInt8",
            "cycleFinalCirculationTemperatureInFahrenheit:UInt8",
            "cycleMinimumTurbidityInNTU:UInt16",
            "cycleMaximumTurbidityInNTU:UInt16"
        ]
    });
    
    appliance.cycleData2 = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "cycleTime:UInt32",
            "cycleNumber:UInt8",
            "cycleDurationInMinutes:UInt8",
            "cycleCompleted:UInt8",
            "cycleMinimumTemperatureInFahrenheit:UInt8",
            "cycleMaximumTemperatureInFahrenheit:UInt8",
            "cycleFinalCirculationTemperatureInFahrenheit:UInt8",
            "cycleMinimumTurbidityInNTU:UInt16",
            "cycleMaximumTurbidityInNTU:UInt16"
        ]
    });
    
    appliance.cycleData3 = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "cycleTime:UInt32",
            "cycleNumber:UInt8",
            "cycleDurationInMinutes:UInt8",
            "cycleCompleted:UInt8",
            "cycleMinimumTemperatureInFahrenheit:UInt8",
            "cycleMaximumTemperatureInFahrenheit:UInt8",
            "cycleFinalCirculationTemperatureInFahrenheit:UInt8",
            "cycleMinimumTurbidityInNTU:UInt16",
            "cycleMaximumTurbidityInNTU:UInt16"
        ]
    });
    
    appliance.cycleData4 = appliance.erd({
        erd: base++,
        endian: "big",
        format: [
            "cycleTime:UInt32",
            "cycleNumber:UInt8",
            "cycleDurationInMinutes:UInt8",
            "cycleCompleted:UInt8",
            "cycleMinimumTemperatureInFahrenheit:UInt8",
            "cycleMaximumTemperatureInFahrenheit:UInt8",
            "cycleFinalCirculationTemperatureInFahrenheit:UInt8",
            "cycleMinimumTurbidityInNTU:UInt16",
            "cycleMaximumTurbidityInNTU:UInt16"
        ]
    });
    
    appliance.dryDrainCounters = appliance.erd({
        erd: base++,
        format: [
            "noDryDrainDetectedCount:UInt8",
            "noDryDrainDetectedMaximumValue:UInt8"
        ]
    });
    
    appliance.tubLight = appliance.erd({
        erd: base++,
        format: [
            "dutyCyclePercentage:UInt8"
        ]
    });
    
    return appliance;
}

exports.plugin = function (bus, configuration, callback) {
    bus.on("appliance", function (appliance) {
        appliance.read(DISHWASHER_BASE, function (value) {
            bus.emit("dishwasher", DishWasher(bus, appliance, DISHWASHER_BASE));
        });
    });
    
    var create = bus.create;
    
    bus.create = function (name, callback) {
        create(name, function (appliance) {
            if (name == "dishwasher") {
                appliance.address = configuration.address;
                appliance.version = configuration.version;
                DishWasher(bus, appliance, DISHWASHER_BASE);
            }
            
            callback(appliance);
        });
    };
    
    callback(bus);
};
