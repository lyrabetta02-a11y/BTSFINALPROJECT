# Cara Menambahkan Produk dengan Gambar dan Link Order

## Langkah-langkah:

### 1. Upload Gambar Produk
- Simpan gambar produk (contoh: flange.jpg) ke folder: `attached_assets/generated_images/`
- Format nama file: gunakan huruf kecil dan underscore (contoh: `flange_pvc_dn40.jpg`)

### 2. Update File `client/src/lib/data.ts`

#### Import gambar di bagian atas file:
```typescript
import flangeImage from "@assets/generated_images/flange_pvc_dn40.jpg";
```

#### Tambahkan/update produk di array `products`:
```typescript
{
  id: "flange-001",
  name: "Flange PVC DN40",
  category: "Flange",
  description: "Deskripsi produk...",
  image: flangeImage, // Gunakan gambar yang sudah diimport
  shopeeLink: "https://shopee.co.id/flange-pvc-dn40-i.123456.7890123", // Link Shopee
  tokopediaLink: "https://www.tokopedia.com/store/flange-pvc-dn40", // Link Tokopedia
  price: "Rp 50.000",
}
```

### 3. Format Link Marketplace

**Shopee:**
- Format: `https://shopee.co.id/nama-produk-i.123456.7890123`
- Cara dapatkan: Copy link dari halaman produk Shopee

**Tokopedia:**
- Format: `https://www.tokopedia.com/nama-toko/nama-produk`
- Cara dapatkan: Copy link dari halaman produk Tokopedia

### 4. Build dan Deploy
Setelah menambahkan produk, jalankan:
```bash
npm run build
vercel --prod
```

## Contoh Lengkap:

```typescript
// Import gambar
import flangeImage from "@assets/generated_images/flange_pvc_dn40.jpg";

// Tambahkan ke array products
{
  id: "flange-001",
  name: "Flange PVC DN40",
  category: "Flange",
  description: "Flange PVC dengan ukuran DN40, cocok untuk sistem pipa industri.",
  image: flangeImage,
  shopeeLink: "https://shopee.co.id/flange-pvc-dn40-i.123456.7890123",
  tokopediaLink: "https://www.tokopedia.com/benuateknik/flange-pvc-dn40",
  price: "Rp 50.000",
}
```
