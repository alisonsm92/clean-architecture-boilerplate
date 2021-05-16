import GenericDBManager from 'infra/database/genericDBManager';

const setupGenericDatabase = async () :Promise<GenericDBManager> => GenericDBManager.initialize();

export default setupGenericDatabase;
