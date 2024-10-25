import { Storage, TransferManager } from '@google-cloud/storage'

const storage = new Storage()

const transferManager = new TransferManager(storage.bucket("mojaribdev"))  

export {storage, transferManager}