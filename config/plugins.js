module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-oci-objectstorage',
      providerOptions: {
        tenancy: env('OCI_TENANCY_ID'),
        user: env('OCI_USER_ID'),
        fingerprint: env('OCI_FINGERPRINT'),
        privateKeyBase64: env('OCI_PRIVATE_KEY_BASE64'),
        passphrase: env('OCI_PASSPHRASE'),
        region: env('OCI_REGION'),
        bucket: env('OCI_BUCKET')
      },
      actionOptions: {
        upload: {},
        delete: {}
      },
    }
  },
});