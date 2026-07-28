<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Waste Records</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; }
          .card {
            background: white;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 12px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .card img { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
          .info h3 { margin: 0 0 4px; }
          .info p { margin: 2px 0; color: #555; font-size: 14px; }
        </style>
      </head>
      <body>
        <h1>Waste Records</h1>
        <xsl:apply-templates select="data/items/item"/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="item">
    <div class="card">
      <img src="{image}" alt="avatar" onerror="this.src='https:/via.placeholder.com/60'"/>
      <div class="info">
        <h3><xsl:value-of select="name"/></h3>
        <p><strong>Gender:</strong> <xsl:value-of select="gender"/></p>
        <p><strong>Created:</strong> <xsl:value-of select="created"/></p>
      </div>
    </div>
  </xsl:template>
</xsl:stylesheet>
