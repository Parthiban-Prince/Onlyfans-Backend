import { v2 as cloudinary } from 'cloudinary';
import { Apikey, Apisecert, Cname } from './serverConfig.js';

cloudinary.config({
  api_key: Apikey,
  api_secret: Apisecert,
  cloud_name: Cname,
});

// Check connection using ping
async function checkCloudinaryConnection() {
  try {
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary connected');
  } catch (error) {
    console.error('❌ Cloudinary connection failed:', error.message);
  }
}




checkCloudinaryConnection();

export default cloudinary;
