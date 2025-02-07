# Release History
    
## 15.5.0 (2023-05-11)
    
**Features**

  - Added Interface ContinuousModeProperties
  - Added Type Alias ContinuousTier
  - Interface ContinuousModeBackupPolicy has a new optional parameter continuousModeProperties
  - Interface RestorableDatabaseAccountGetResult has a new optional parameter oldestRestorableTime
  - Interface ThroughputSettingsResource has a new optional parameter instantMaximumThroughput
  - Interface ThroughputSettingsResource has a new optional parameter softAllowedMaximumThroughput
  - Added Enum KnownContinuousTier
  - Enum KnownPublicNetworkAccess has a new value SecuredByPerimeter
    
    
## 15.4.0 (2023-04-23)
    
**Features**

  - Added Interface AuthenticationMethodLdapProperties
  - Added Interface CassandraError
  - Added Type Alias Kind
  - Added Type Alias Status
  - Added Type Alias Type
  - Interface CassandraClusterPublicStatus has a new optional parameter errors
  - Interface ClusterResourceProperties has a new optional parameter provisionError
  - Interface ComponentsM9L909SchemasCassandraclusterpublicstatusPropertiesDatacentersItemsPropertiesNodesItems has a new optional parameter cassandraProcessStatus
  - Interface DatabaseAccountConnectionString has a new optional parameter keyKind
  - Interface DatabaseAccountConnectionString has a new optional parameter type
  - Interface DataCenterResourceProperties has a new optional parameter authenticationMethodLdapProperties
  - Interface DataCenterResourceProperties has a new optional parameter deallocated
  - Interface DataCenterResourceProperties has a new optional parameter provisionError
  - Interface LocationProperties has a new optional parameter isSubscriptionRegionAccessAllowedForAz
  - Interface LocationProperties has a new optional parameter isSubscriptionRegionAccessAllowedForRegular
  - Interface LocationProperties has a new optional parameter status
  - Added Enum KnownKind
  - Added Enum KnownStatus
  - Added Enum KnownType
  - Enum KnownAuthenticationMethod has a new value Ldap
    
    
## 15.3.0 (2023-02-10)
    
**Features**

  - Added operation group RestorableGremlinDatabases
  - Added operation group RestorableGremlinGraphs
  - Added operation group RestorableGremlinResources
  - Added operation group RestorableTableResources
  - Added operation group RestorableTables
  - Added operation GremlinResources.beginRetrieveContinuousBackupInformation
  - Added operation GremlinResources.beginRetrieveContinuousBackupInformationAndWait
  - Added operation SqlResources.beginCreateUpdateClientEncryptionKey
  - Added operation SqlResources.beginCreateUpdateClientEncryptionKeyAndWait
  - Added operation SqlResources.getClientEncryptionKey
  - Added operation SqlResources.listClientEncryptionKeys
  - Added operation TableResources.beginRetrieveContinuousBackupInformation
  - Added operation TableResources.beginRetrieveContinuousBackupInformationAndWait
  - Added Interface CassandraResourcesCreateUpdateCassandraKeyspaceHeaders
  - Added Interface CassandraResourcesCreateUpdateCassandraTableHeaders
  - Added Interface CassandraResourcesDeleteCassandraKeyspaceHeaders
  - Added Interface CassandraResourcesDeleteCassandraTableHeaders
  - Added Interface CassandraResourcesMigrateCassandraKeyspaceToAutoscaleHeaders
  - Added Interface CassandraResourcesMigrateCassandraKeyspaceToManualThroughputHeaders
  - Added Interface CassandraResourcesMigrateCassandraTableToAutoscaleHeaders
  - Added Interface CassandraResourcesMigrateCassandraTableToManualThroughputHeaders
  - Added Interface CassandraResourcesUpdateCassandraKeyspaceThroughputHeaders
  - Added Interface CassandraResourcesUpdateCassandraTableThroughputHeaders
  - Added Interface ClientEncryptionIncludedPath
  - Added Interface ClientEncryptionKeyCreateUpdateParameters
  - Added Interface ClientEncryptionKeyGetPropertiesResource
  - Added Interface ClientEncryptionKeyGetResults
  - Added Interface ClientEncryptionKeyResource
  - Added Interface ClientEncryptionKeysListResult
  - Added Interface ClientEncryptionPolicy
  - Added Interface DatabaseAccountsDeleteHeaders
  - Added Interface DatabaseAccountsFailoverPriorityChangeHeaders
  - Added Interface DatabaseAccountsOfflineRegionHeaders
  - Added Interface DatabaseAccountsOnlineRegionHeaders
  - Added Interface DatabaseAccountsRegenerateKeyHeaders
  - Added Interface GremlinDatabaseRestoreResource
  - Added Interface GremlinResourcesCreateUpdateGremlinDatabaseHeaders
  - Added Interface GremlinResourcesCreateUpdateGremlinGraphHeaders
  - Added Interface GremlinResourcesDeleteGremlinDatabaseHeaders
  - Added Interface GremlinResourcesDeleteGremlinGraphHeaders
  - Added Interface GremlinResourcesMigrateGremlinDatabaseToAutoscaleHeaders
  - Added Interface GremlinResourcesMigrateGremlinDatabaseToManualThroughputHeaders
  - Added Interface GremlinResourcesMigrateGremlinGraphToAutoscaleHeaders
  - Added Interface GremlinResourcesMigrateGremlinGraphToManualThroughputHeaders
  - Added Interface GremlinResourcesRetrieveContinuousBackupInformationOptionalParams
  - Added Interface GremlinResourcesUpdateGremlinDatabaseThroughputHeaders
  - Added Interface GremlinResourcesUpdateGremlinGraphThroughputHeaders
  - Added Interface KeyWrapMetadata
  - Added Interface MongoDBResourcesCreateUpdateMongoDBCollectionHeaders
  - Added Interface MongoDBResourcesCreateUpdateMongoDBDatabaseHeaders
  - Added Interface MongoDBResourcesDeleteMongoDBCollectionHeaders
  - Added Interface MongoDBResourcesDeleteMongoDBDatabaseHeaders
  - Added Interface MongoDBResourcesMigrateMongoDBCollectionToAutoscaleHeaders
  - Added Interface MongoDBResourcesMigrateMongoDBCollectionToManualThroughputHeaders
  - Added Interface MongoDBResourcesMigrateMongoDBDatabaseToAutoscaleHeaders
  - Added Interface MongoDBResourcesMigrateMongoDBDatabaseToManualThroughputHeaders
  - Added Interface MongoDBResourcesUpdateMongoDBCollectionThroughputHeaders
  - Added Interface MongoDBResourcesUpdateMongoDBDatabaseThroughputHeaders
  - Added Interface RestorableGremlinDatabaseGetResult
  - Added Interface RestorableGremlinDatabasePropertiesResource
  - Added Interface RestorableGremlinDatabasesListOptionalParams
  - Added Interface RestorableGremlinDatabasesListResult
  - Added Interface RestorableGremlinGraphGetResult
  - Added Interface RestorableGremlinGraphPropertiesResource
  - Added Interface RestorableGremlinGraphsListOptionalParams
  - Added Interface RestorableGremlinGraphsListResult
  - Added Interface RestorableGremlinResourcesGetResult
  - Added Interface RestorableGremlinResourcesListOptionalParams
  - Added Interface RestorableGremlinResourcesListResult
  - Added Interface RestorableTableGetResult
  - Added Interface RestorableTablePropertiesResource
  - Added Interface RestorableTableResourcesGetResult
  - Added Interface RestorableTableResourcesListOptionalParams
  - Added Interface RestorableTableResourcesListResult
  - Added Interface RestorableTablesListOptionalParams
  - Added Interface RestorableTablesListResult
  - Added Interface ServiceCreateHeaders
  - Added Interface ServiceDeleteHeaders
  - Added Interface SqlResourcesCreateUpdateClientEncryptionKeyHeaders
  - Added Interface SqlResourcesCreateUpdateClientEncryptionKeyOptionalParams
  - Added Interface SqlResourcesCreateUpdateSqlContainerHeaders
  - Added Interface SqlResourcesCreateUpdateSqlDatabaseHeaders
  - Added Interface SqlResourcesCreateUpdateSqlStoredProcedureHeaders
  - Added Interface SqlResourcesCreateUpdateSqlTriggerHeaders
  - Added Interface SqlResourcesCreateUpdateSqlUserDefinedFunctionHeaders
  - Added Interface SqlResourcesDeleteSqlContainerHeaders
  - Added Interface SqlResourcesDeleteSqlDatabaseHeaders
  - Added Interface SqlResourcesDeleteSqlStoredProcedureHeaders
  - Added Interface SqlResourcesDeleteSqlTriggerHeaders
  - Added Interface SqlResourcesDeleteSqlUserDefinedFunctionHeaders
  - Added Interface SqlResourcesGetClientEncryptionKeyOptionalParams
  - Added Interface SqlResourcesListClientEncryptionKeysOptionalParams
  - Added Interface SqlResourcesMigrateSqlContainerToAutoscaleHeaders
  - Added Interface SqlResourcesMigrateSqlContainerToManualThroughputHeaders
  - Added Interface SqlResourcesMigrateSqlDatabaseToAutoscaleHeaders
  - Added Interface SqlResourcesMigrateSqlDatabaseToManualThroughputHeaders
  - Added Interface SqlResourcesUpdateSqlContainerThroughputHeaders
  - Added Interface SqlResourcesUpdateSqlDatabaseThroughputHeaders
  - Added Interface TableResourcesCreateUpdateTableHeaders
  - Added Interface TableResourcesDeleteTableHeaders
  - Added Interface TableResourcesMigrateTableToAutoscaleHeaders
  - Added Interface TableResourcesMigrateTableToManualThroughputHeaders
  - Added Interface TableResourcesRetrieveContinuousBackupInformationOptionalParams
  - Added Interface TableResourcesUpdateTableThroughputHeaders
  - Added Type Alias CassandraResourcesDeleteCassandraKeyspaceResponse
  - Added Type Alias CassandraResourcesDeleteCassandraTableResponse
  - Added Type Alias DatabaseAccountsDeleteResponse
  - Added Type Alias DatabaseAccountsFailoverPriorityChangeResponse
  - Added Type Alias GremlinResourcesDeleteGremlinDatabaseResponse
  - Added Type Alias GremlinResourcesDeleteGremlinGraphResponse
  - Added Type Alias GremlinResourcesRetrieveContinuousBackupInformationResponse
  - Added Type Alias MinimalTlsVersion
  - Added Type Alias MongoDBResourcesDeleteMongoDBCollectionResponse
  - Added Type Alias MongoDBResourcesDeleteMongoDBDatabaseResponse
  - Added Type Alias RestorableGremlinDatabasesListResponse
  - Added Type Alias RestorableGremlinGraphsListResponse
  - Added Type Alias RestorableGremlinResourcesListResponse
  - Added Type Alias RestorableTableResourcesListResponse
  - Added Type Alias RestorableTablesListResponse
  - Added Type Alias SqlResourcesCreateUpdateClientEncryptionKeyResponse
  - Added Type Alias SqlResourcesDeleteSqlContainerResponse
  - Added Type Alias SqlResourcesDeleteSqlDatabaseResponse
  - Added Type Alias SqlResourcesDeleteSqlStoredProcedureResponse
  - Added Type Alias SqlResourcesDeleteSqlTriggerResponse
  - Added Type Alias SqlResourcesDeleteSqlUserDefinedFunctionResponse
  - Added Type Alias SqlResourcesGetClientEncryptionKeyResponse
  - Added Type Alias SqlResourcesListClientEncryptionKeysResponse
  - Added Type Alias TableResourcesDeleteTableResponse
  - Added Type Alias TableResourcesRetrieveContinuousBackupInformationResponse
  - Interface DatabaseAccountCreateUpdateParameters has a new optional parameter minimalTlsVersion
  - Interface DatabaseAccountGetResults has a new optional parameter minimalTlsVersion
  - Interface DatabaseAccountUpdateParameters has a new optional parameter minimalTlsVersion
  - Interface RestorableMongodbCollectionsListOptionalParams has a new optional parameter endTime
  - Interface RestorableMongodbCollectionsListOptionalParams has a new optional parameter startTime
  - Interface RestoreParameters has a new optional parameter gremlinDatabasesToRestore
  - Interface RestoreParameters has a new optional parameter tablesToRestore
  - Interface SqlContainerResource has a new optional parameter clientEncryptionPolicy
  - Added Enum KnownMinimalTlsVersion
  - Added function getContinuationToken
    
    
## 15.2.0 (2022-09-05)
    
**Features**

  - Added operation MongoDBResources.beginCreateUpdateMongoRoleDefinition
  - Added operation MongoDBResources.beginCreateUpdateMongoRoleDefinitionAndWait
  - Added operation MongoDBResources.beginCreateUpdateMongoUserDefinition
  - Added operation MongoDBResources.beginCreateUpdateMongoUserDefinitionAndWait
  - Added operation MongoDBResources.beginDeleteMongoRoleDefinition
  - Added operation MongoDBResources.beginDeleteMongoRoleDefinitionAndWait
  - Added operation MongoDBResources.beginDeleteMongoUserDefinition
  - Added operation MongoDBResources.beginDeleteMongoUserDefinitionAndWait
  - Added operation MongoDBResources.getMongoRoleDefinition
  - Added operation MongoDBResources.getMongoUserDefinition
  - Added operation MongoDBResources.listMongoRoleDefinitions
  - Added operation MongoDBResources.listMongoUserDefinitions
  - Added Interface AccountKeyMetadata
  - Added Interface DatabaseAccountKeysMetadata
  - Added Interface MongoDBResourcesCreateUpdateMongoRoleDefinitionOptionalParams
  - Added Interface MongoDBResourcesCreateUpdateMongoUserDefinitionOptionalParams
  - Added Interface MongoDBResourcesDeleteMongoRoleDefinitionOptionalParams
  - Added Interface MongoDBResourcesDeleteMongoUserDefinitionOptionalParams
  - Added Interface MongoDBResourcesGetMongoRoleDefinitionOptionalParams
  - Added Interface MongoDBResourcesGetMongoUserDefinitionOptionalParams
  - Added Interface MongoDBResourcesListMongoRoleDefinitionsOptionalParams
  - Added Interface MongoDBResourcesListMongoUserDefinitionsOptionalParams
  - Added Interface MongoRoleDefinitionCreateUpdateParameters
  - Added Interface MongoRoleDefinitionGetResults
  - Added Interface MongoRoleDefinitionListResult
  - Added Interface MongoUserDefinitionCreateUpdateParameters
  - Added Interface MongoUserDefinitionGetResults
  - Added Interface MongoUserDefinitionListResult
  - Added Interface Privilege
  - Added Interface PrivilegeResource
  - Added Interface Role
  - Added Type Alias MongoDBResourcesCreateUpdateMongoRoleDefinitionResponse
  - Added Type Alias MongoDBResourcesCreateUpdateMongoUserDefinitionResponse
  - Added Type Alias MongoDBResourcesGetMongoRoleDefinitionResponse
  - Added Type Alias MongoDBResourcesGetMongoUserDefinitionResponse
  - Added Type Alias MongoDBResourcesListMongoRoleDefinitionsResponse
  - Added Type Alias MongoDBResourcesListMongoUserDefinitionsResponse
  - Added Type Alias MongoRoleDefinitionType
  - Interface DatabaseAccountCreateUpdateParameters has a new optional parameter enablePartitionMerge
  - Interface DatabaseAccountCreateUpdateParameters has a new optional parameter keysMetadata
  - Interface DatabaseAccountGetResults has a new optional parameter enablePartitionMerge
  - Interface DatabaseAccountGetResults has a new optional parameter keysMetadata
  - Interface DatabaseAccountUpdateParameters has a new optional parameter enablePartitionMerge
  - Interface DatabaseAccountUpdateParameters has a new optional parameter keysMetadata
    
    
## 15.1.0 (2022-07-18)
    
**Features**

  - Added operation group Service
  - Added Interface CassandraKeyspaceCreateUpdateParameters
  - Added Interface CassandraKeyspaceGetPropertiesOptions
  - Added Interface CassandraKeyspaceGetPropertiesResource
  - Added Interface CassandraKeyspaceGetResults
  - Added Interface CassandraTableCreateUpdateParameters
  - Added Interface CassandraTableGetPropertiesOptions
  - Added Interface CassandraTableGetPropertiesResource
  - Added Interface CassandraTableGetResults
  - Added Interface ClusterResource
  - Added Interface ContinuousModeBackupPolicy
  - Added Interface DatabaseAccountCreateUpdateParameters
  - Added Interface DatabaseAccountGetResults
  - Added Interface DatabaseAccountListKeysResult
  - Added Interface DataCenterResource
  - Added Interface DataTransferRegionalServiceResource
  - Added Interface DataTransferServiceResource
  - Added Interface DataTransferServiceResourceProperties
  - Added Interface GraphAPIComputeRegionalServiceResource
  - Added Interface GraphAPIComputeServiceResource
  - Added Interface GraphAPIComputeServiceResourceProperties
  - Added Interface GremlinDatabaseCreateUpdateParameters
  - Added Interface GremlinDatabaseGetPropertiesOptions
  - Added Interface GremlinDatabaseGetPropertiesResource
  - Added Interface GremlinDatabaseGetResults
  - Added Interface GremlinGraphCreateUpdateParameters
  - Added Interface GremlinGraphGetPropertiesOptions
  - Added Interface GremlinGraphGetPropertiesResource
  - Added Interface GremlinGraphGetResults
  - Added Interface LocationGetResult
  - Added Interface MaterializedViewsBuilderRegionalServiceResource
  - Added Interface MaterializedViewsBuilderServiceResource
  - Added Interface MaterializedViewsBuilderServiceResourceProperties
  - Added Interface MongoDBCollectionCreateUpdateParameters
  - Added Interface MongoDBCollectionGetPropertiesOptions
  - Added Interface MongoDBCollectionGetPropertiesResource
  - Added Interface MongoDBCollectionGetResults
  - Added Interface MongoDBDatabaseCreateUpdateParameters
  - Added Interface MongoDBDatabaseGetPropertiesOptions
  - Added Interface MongoDBDatabaseGetPropertiesResource
  - Added Interface MongoDBDatabaseGetResults
  - Added Interface NotebookWorkspace
  - Added Interface NotebookWorkspaceCreateUpdateParameters
  - Added Interface PartitionMetric
  - Added Interface PartitionUsage
  - Added Interface PercentileMetricValue
  - Added Interface PeriodicModeBackupPolicy
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProxyResource
  - Added Interface RegionalServiceResource
  - Added Interface RestorableMongodbResourcesGetResult
  - Added Interface RestorableSqlContainerPropertiesResourceContainer
  - Added Interface RestorableSqlDatabasePropertiesResourceDatabase
  - Added Interface RestorableSqlResourcesGetResult
  - Added Interface ServiceCreateOptionalParams
  - Added Interface ServiceDeleteOptionalParams
  - Added Interface ServiceGetOptionalParams
  - Added Interface ServiceListOptionalParams
  - Added Interface ServiceResource
  - Added Interface ServiceResourceCreateUpdateParameters
  - Added Interface ServiceResourceListResult
  - Added Interface ServiceResourceProperties
  - Added Interface SqlContainerCreateUpdateParameters
  - Added Interface SqlContainerGetPropertiesOptions
  - Added Interface SqlContainerGetPropertiesResource
  - Added Interface SqlContainerGetResults
  - Added Interface SqlDatabaseCreateUpdateParameters
  - Added Interface SqlDatabaseGetPropertiesOptions
  - Added Interface SqlDatabaseGetPropertiesResource
  - Added Interface SqlDatabaseGetResults
  - Added Interface SqlDedicatedGatewayRegionalServiceResource
  - Added Interface SqlDedicatedGatewayServiceResource
  - Added Interface SqlDedicatedGatewayServiceResourceProperties
  - Added Interface SqlRoleAssignmentGetResults
  - Added Interface SqlRoleDefinitionGetResults
  - Added Interface SqlStoredProcedureCreateUpdateParameters
  - Added Interface SqlStoredProcedureGetPropertiesResource
  - Added Interface SqlStoredProcedureGetResults
  - Added Interface SqlTriggerCreateUpdateParameters
  - Added Interface SqlTriggerGetPropertiesResource
  - Added Interface SqlTriggerGetResults
  - Added Interface SqlUserDefinedFunctionCreateUpdateParameters
  - Added Interface SqlUserDefinedFunctionGetPropertiesResource
  - Added Interface SqlUserDefinedFunctionGetResults
  - Added Interface TableCreateUpdateParameters
  - Added Interface TableGetPropertiesOptions
  - Added Interface TableGetPropertiesResource
  - Added Interface TableGetResults
  - Added Interface ThroughputSettingsGetPropertiesResource
  - Added Interface ThroughputSettingsGetResults
  - Added Interface ThroughputSettingsUpdateParameters
  - Added Type Alias ServiceCreateResponse
  - Added Type Alias ServiceGetResponse
  - Added Type Alias ServiceListResponse
  - Added Type Alias ServiceResourcePropertiesUnion
  - Added Type Alias ServiceSize
  - Added Type Alias ServiceStatus
  - Added Type Alias ServiceType
  - Interface GremlinGraphResource has a new optional parameter analyticalStorageTtl
  - Class CosmosDBManagementClient has a new parameter service
  - Added Enum KnownServiceSize
  - Added Enum KnownServiceStatus
  - Added Enum KnownServiceType
  - Enum KnownServerVersion has a new value Four2
    
    
## 15.0.0 (2021-12-09)

The package of @azure/arm-cosmosdb is using our next generation design principles since version 15.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
