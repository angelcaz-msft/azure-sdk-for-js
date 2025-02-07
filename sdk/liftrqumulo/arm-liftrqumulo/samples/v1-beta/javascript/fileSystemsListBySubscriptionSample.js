/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { QumuloStorage } = require("@azure/arm-liftrqumulo");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List FileSystemResource resources by subscription ID
 *
 * @summary List FileSystemResource resources by subscription ID
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/preview/2022-10-12-preview/examples/FileSystems_ListBySubscription_MaximumSet_Gen.json
 */
async function fileSystemsListBySubscriptionMaximumSetGen() {
  const subscriptionId = process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "ulseeqylxb";
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fileSystems.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List FileSystemResource resources by subscription ID
 *
 * @summary List FileSystemResource resources by subscription ID
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/preview/2022-10-12-preview/examples/FileSystems_ListBySubscription_MinimumSet_Gen.json
 */
async function fileSystemsListBySubscriptionMinimumSetGen() {
  const subscriptionId = process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "aaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fileSystems.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  fileSystemsListBySubscriptionMaximumSetGen();
  fileSystemsListBySubscriptionMinimumSetGen();
}

main().catch(console.error);
