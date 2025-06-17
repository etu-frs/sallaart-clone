import React, { useState, useEffect } from 'react';
import './App.css';

// Import images
import artsallaLogo from './assets/artsalla_logo.gif';
import identityDesign from './assets/identity_design.png';
import arabicCalligraphyLogo from './assets/arabic_calligraphy_logo.jpeg';
import professionalLogoDesign from './assets/professional_logo_design.jpeg';
import faisalCoveringsLogo from './assets/faisal_coverings_logo.jpeg';
import dallahMajanLogo from './assets/dallah_majan_logo.jpeg';
import tirhalLogo from './assets/tirhal_logo.png';
import alHlaisLogo from './assets/al_hlais_logo.png';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDesignServicesOpen, setIsDesignServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customFormData, setCustomFormData] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('artsalla-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('artsalla-cart', JSON.stringify(cart));
  }, [cart]);

  // Reset form data when product changes
  useEffect(() => {
    setCustomFormData({});
    setCurrentImageIndex(0);
  }, [selectedProduct]);

  const products = [
    {
      id: 1,
      title: 'كتابة الأسماء بالخط العربي',
      price: 99,
      originalPrice: null,
      image: arabicCalligraphyLogo,
      badge: 'خط العربي',
      badgeColor: 'orange',
      description: 'خدمة كتابة الأسماء بالخط العربي الجميل والمميز',
      category: 'خدمات التصميم',
      gallery: [arabicCalligraphyLogo],
      features: [
        'تصميم احترافي للاسم',
        'عدة إصدارات لونية',
        'ملفات عالية الجودة',
        'تسليم سريع'
      ]
    },
    {
      id: 2,
      title: 'تصميم شعار احترافي',
      price: 360,
      originalPrice: 460,
      image: professionalLogoDesign,
      badge: 'الأكثر مبيعاً',
      badgeColor: 'blue',
      description: 'تصميم شعار احترافي يعكس هوية مشروعك بأعلى معايير الجودة',
      category: 'خدمات التصميم',
      gallery: [professionalLogoDesign],
      features: [
        'تصميم شعار فريد',
        'نموذجين للاختيار',
        'ثلاث تعديلات مجانية',
        'ملفات متعددة الصيغ'
      ]
    },
    {
      id: 3,
      title: 'تصميم شعار بالخط العربي',
      price: 360,
      originalPrice: 560,
      image: arabicCalligraphyLogo,
      badge: 'خط العربي',
      badgeColor: 'green',
      description: 'الخط العربي يتميز بجمالية وفخامة استثنائية، مما يجعله خياراً مثالياً لتصميم الشعارات التجارية الاحترافية',
      category: 'خدمات التصميم',
      gallery: [arabicCalligraphyLogo],
      features: [
        'تصميم الشعار بشكل احترافي',
        'عدد (2) نماذج + عدد (3) تعديلات مجانية',
        'عدة إصدارات لونية',
        'تجهيز الشعار للاستخدام الرقمي والسوشيال ميديا',
        'تجهيز الشعار للطباعة بالجودة الكاملة',
        'تسليم جميع ملفات الشعار بصيغ متعددة',
        'الضمان الذهبي لأمان الملفات',
        'وسائل دفع آمنة 100%',
        'التسليم خلال (5) أيام عمل'
      ],
      customForm: {
        fields: [
          { name: 'projectNameAr', label: 'اسم المشروع باللغة العربية', type: 'text', required: true },
          { name: 'projectNameEn', label: 'اسم المشروع باللغة الإنجليزية', type: 'text', required: false },
          { name: 'fontType', label: 'نوع الخط', type: 'select', options: ['سنبلي', 'ديواني', 'ثلث', 'كوفي', 'رقعة', 'معلي', 'حر'], required: true },
          { name: 'preferredColors', label: 'الألوان المفضلة', type: 'text', required: false },
          { name: 'additionalDetails', label: 'تفاصيل إضافية', type: 'textarea', required: false },
          { name: 'whatsappOrInstagram', label: 'خانة اختيارية: رقم الواتس اب أو حساب الانستجرام', type: 'text', required: false },
          { name: 'referenceDesign', label: 'نموذج لتصميم نال إعجابك', type: 'file', required: false }
        ]
      }
    },
    {
      id: 4,
      title: 'تصميم هوية بصرية متكاملة',
      price: 1440,
      originalPrice: null,
      image: identityDesign,
      badge: 'الأكثر مبيعاً',
      badgeColor: 'red',
      description: 'خدمة متكاملة تشمل كافة التصاميم اللازمة لمشروعك، من الشعار إلى أنواع المطبوعات المتنوعة، بتصاميم مميزة وبأعلى معايير الجودة',
      category: 'خدمات التصميم',
      gallery: [identityDesign],
      features: [
        'تصميم شعار فريد واحترافي يعكس هوية مشروعك',
        'تصميم بطاقة أعمال احترافية تحتوي على بيانات التواصل',
        'تصميم ورق مراسلات A4 بترويسة رسمية لخطابات الشركة',
        'تصميم مغلف ورق مراسلات A4 لحفظ الوثائق الكبيرة',
        'تصميم ظرف DL مناسب للرسائل والدعوات',
        'إعداد أنماط وزخارف بصرية مرافقة للشعار تعزز من هوية العلامة',
        'تصميم قوالب إعلانات رقمية (طولية ومربعة) عدد (2) للاستخدام عبر منصات التواصل',
        'الألوان الرئيسية والثانوية للعلامة التجارية',
        'الخطوط الرسمية (العربية والإنجليزية) وتوفير جميع ملفات الخطوط المعتمدة',
        'تقديم كتاب إرشادات الهوية (Brand Guidelines) بصيغة PDF يتضمن استعراضًا كاملاً للهوية',
        'تسليم الملفات بصيغ متعددة لتناسب كافة الاستخدامات',
        'تقديم نموذجين للشعار، مع إمكانية العمل على النموذج الثاني في حال عدم الموافقة على الأول',
        'ثلاث تعديلات مجانية لكل نموذج لضمان رضاكم التام',
        'التواصل المرن عبر واتساب أو إنستغرام أو البريد الإلكتروني، مع إمكانية عقد اجتماع أونلاين مع المصمم',
        'التسليم الرقمي الكامل عبر البريد الإلكتروني، والملفات جاهزة للاستخدام والطباعة',
        'مدة التنفيذ: يتم تسليم كامل الهوية خلال (5-10) أيام عمل بعد اعتماد الشعار',
        'خدماتنا متاحة لجميع الدول، مع ضمان رضاكم التام عن الهوية المصممة خصيصًا لكم'
      ]
    }
  ];

  const galleryItems = [
    { id: 1, image: faisalCoveringsLogo, title: 'فيصل للتغطيات', category: 'logos' },
    { id: 2, image: dallahMajanLogo, title: 'دلة مجان شعار منقى بالخط العربي', category: 'logos' },
    { id: 3, image: tirhalLogo, title: 'فيصل للتغطيات شعار بالخط العربي', category: 'logos' },
    { id: 4, image: alHlaisLogo, title: 'شركة الحليس العقارية', category: 'identity' },
    { id: 5, image: identityDesign, title: 'تصميم هوية بصرية متكاملة', category: 'identity' },
    { id: 6, image: arabicCalligraphyLogo, title: 'مخطوطات عربية', category: 'calligraphy' }
  ];

  const filteredGalleryItems = galleryFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  // Cart functions
  const addToCart = (product, customData = null) => {
    const cartItem = {
      id: Date.now(), // Unique cart item ID
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      customData: customData
    };
    setCart(prevCart => [...prevCart, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== cartItemId));
  };

  const updateCartQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Product detail functions
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleCustomFormChange = (fieldName, value) => {
    setCustomFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedProduct.customForm ? customFormData : null);
    alert('تم إضافة المنتج إلى السلة بنجاح!');
  };

  const renderHomePage = () => (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-logo">
            <img src={artsallaLogo} alt="آرت سلة" />
          </div>
          <h1>لخدمات التصميم والخط العربي</h1>
          <h2>متخصصون في تقديم خدمات التصميم والخط العربي</h2>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card" onClick={() => openProductDetail(product)}>
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                  {product.badge && (
                    <span className={`product-badge ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <div className="product-price">
                    <span className="current-price">من {product.price} ر.س</span>
                    {product.originalPrice && (
                      <span className="original-price">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>دفع آمن</h3>
              <p>دفع آمن بتقنية SSL</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🕐</div>
              <h3>دعم 24/7</h3>
              <p>متاح دائماً لخدمتك</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>جودة عالية</h3>
              <p>خدمات مميزة لجميع العملاء</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2>معرض أعمالنا</h2>
          <div className="gallery-filters">
            <button 
              className={galleryFilter === 'all' ? 'active' : ''}
              onClick={() => setGalleryFilter('all')}
            >
              الكل
            </button>
            <button 
              className={galleryFilter === 'logos' ? 'active' : ''}
              onClick={() => setGalleryFilter('logos')}
            >
              شعارات
            </button>
            <button 
              className={galleryFilter === 'identity' ? 'active' : ''}
              onClick={() => setGalleryFilter('identity')}
            >
              هويات بصرية
            </button>
            <button 
              className={galleryFilter === 'calligraphy' ? 'active' : ''}
              onClick={() => setGalleryFilter('calligraphy')}
            >
              مخطوطات
            </button>
          </div>
          <div className="gallery-grid">
            {filteredGalleryItems.map(item => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderProductDetail = () => {
    if (!selectedProduct) return null;

    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="product-detail-content">
            <div className="product-images">
              <div className="main-image">
                <img 
                  src={selectedProduct.gallery ? selectedProduct.gallery[currentImageIndex] : selectedProduct.image} 
                  alt={selectedProduct.title} 
                />
              </div>
              {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                <div className="image-thumbnails">
                  {selectedProduct.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${selectedProduct.title} ${index + 1}`}
                      className={currentImageIndex === index ? 'active' : ''}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="product-info">
              <h1>{selectedProduct.title}</h1>
              <div className="product-price">
                <span className="current-price">{selectedProduct.price} ر.س</span>
                {selectedProduct.originalPrice && (
                  <span className="original-price">{selectedProduct.originalPrice} ر.س</span>
                )}
              </div>
              
              <div className="product-description">
                <p>{selectedProduct.description}</p>
              </div>

              {selectedProduct.features && (
                <div className="product-features">
                  <h3>محتويات الباقة:</h3>
                  <ul>
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>✅ {feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProduct.customForm && (
                <div className="custom-form">
                  <h3>تفاصيل الطلب:</h3>
                  {selectedProduct.customForm.fields.map((field, index) => (
                    <div key={index} className="form-group">
                      <label>{field.label} {field.required && '*'}</label>
                      {field.type === 'text' && (
                        <input 
                          type="text"
                          value={customFormData[field.name] || ''}
                          onChange={(e) => handleCustomFormChange(field.name, e.target.value)}
                          required={field.required}
                        />
                      )}
                      {field.type === 'textarea' && (
                        <textarea 
                          value={customFormData[field.name] || ''}
                          onChange={(e) => handleCustomFormChange(field.name, e.target.value)}
                          required={field.required}
                          rows="3"
                        />
                      )}
                      {field.type === 'select' && (
                        <select 
                          value={customFormData[field.name] || ''}
                          onChange={(e) => handleCustomFormChange(field.name, e.target.value)}
                          required={field.required}
                        >
                          <option value="">اختر...</option>
                          {field.options.map((option, optIndex) => (
                            <option key={optIndex} value={option}>{option}</option>
                          ))}
                        </select>
                      )}
                      {field.type === 'file' && (
                        <input 
                          type="file"
                          onChange={(e) => handleCustomFormChange(field.name, e.target.files[0])}
                          accept="image/*"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="product-actions">
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  أضف للسلة
                </button>
                <button className="buy-now-btn">
                  شراء الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCartPage = () => (
    <div className="cart-page">
      <div className="container">
        <h1>سلة التسوق الخاصة بك</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>سلة التسوق فارغة</h2>
            <button 
              className="continue-shopping-btn"
              onClick={() => setCurrentPage('home')}
            >
              متابعة التسوق
            </button>
            
            <div className="login-prompt">
              <p>لديك حساب مسبقًا؟</p>
              <button onClick={() => setCurrentPage('login')}>سجل الدخول</button>
              <p>لدفع أسرع</p>
            </div>

            <div className="suggested-products">
              <h3>منتجات قد تعجبك</h3>
              <div className="products-grid">
                {products.slice(0, 4).map(product => (
                  <div key={product.id} className="product-card" onClick={() => openProductDetail(product)}>
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                      {product.badge && (
                        <span className={`product-badge ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="product-info">
                      <h3>{product.title}</h3>
                      <div className="product-price">
                        <span className="current-price">من {product.price} ر.س</span>
                        {product.originalPrice && (
                          <span className="original-price">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="item-price">{item.price} ر.س</p>
                    {item.customData && (
                      <div className="custom-data">
                        <p><strong>تفاصيل الطلب:</strong></p>
                        {Object.entries(item.customData).map(([key, value]) => (
                          value && <p key={key}><strong>{key}:</strong> {value}</p>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="item-quantity">
                    <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="item-total">
                    {item.price * item.quantity} ر.س
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    حذف
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h3>ملخص الطلب</h3>
              <div className="summary-line">
                <span>المجموع الفرعي:</span>
                <span>{getCartTotal()} ر.س</span>
              </div>
              <div className="summary-line">
                <span>الشحن:</span>
                <span>مجاني</span>
              </div>
              <div className="summary-line total">
                <span>المجموع الكلي:</span>
                <span>{getCartTotal()} ر.س</span>
              </div>
              <button className="checkout-btn">إتمام الطلب</button>
              <button className="clear-cart-btn" onClick={clearCart}>إفراغ السلة</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="about-page">
      <div className="container">
        <h1>من نحن</h1>
        <div className="about-content">
          <p>
            متجر ارت سلة / سلة فن - هو متجر يوفر لك منتجات وخدمات تصميم رقمي متعددة ذات جودة عالية لتختار منها 
            الأفضل وبأسعار تنافسية لن تجدها في أي متجر آخر. التسوق معنا عملية ممتعة وآمنة. ونوفر لك كل ما تحتاجه من 
            التسهيلات سواء في اختيار المنتج أو في عملية الدفع الآمنة.
          </p>
          
          <h3>يمكنكم التواصل معنا عبر الوسائل التالية:</h3>
          <div className="contact-info">
            <p><strong>WhatsApp:</strong> +966 53 135 1650</p>
            <p><strong>Email:</strong> info@artsalla.com</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProductsPage = () => (
    <div className="products-page">
      <div className="container">
        <h1>المنتجات</h1>
        <div className="products-filters">
          <div className="filter-group">
            <label>فرز حسب:</label>
            <select>
              <option>مميز</option>
              <option>الأفضل مبيعا</option>
              <option>أبجديا، ي - أ</option>
              <option>أبجديا، أ - ي</option>
              <option>السعر، من الارخص للاعلى</option>
              <option>السعر، الاعلى الى الارخص</option>
              <option>التاريخ، من القديم للجديد</option>
              <option>التاريخ، من الجديد للقديم</option>
            </select>
          </div>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card" onClick={() => openProductDetail(product)}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                {product.badge && (
                  <span className={`product-badge ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <div className="product-price">
                  <span className="current-price">من {product.price} ر.س</span>
                  {product.originalPrice && (
                    <span className="original-price">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGalleryPage = () => (
    <div className="gallery-page">
      <div className="container">
        <h1>معرض الأعمال</h1>
        <div className="gallery-filters">
          <button 
            className={galleryFilter === 'all' ? 'active' : ''}
            onClick={() => setGalleryFilter('all')}
          >
            الكل
          </button>
          <button 
            className={galleryFilter === 'logos' ? 'active' : ''}
            onClick={() => setGalleryFilter('logos')}
          >
            شعارات
          </button>
          <button 
            className={galleryFilter === 'identity' ? 'active' : ''}
            onClick={() => setGalleryFilter('identity')}
          >
            هويات بصرية
          </button>
          <button 
            className={galleryFilter === 'calligraphy' ? 'active' : ''}
            onClick={() => setGalleryFilter('calligraphy')}
          >
            مخطوطات
          </button>
          <button 
            className={galleryFilter === 'packaging' ? 'active' : ''}
            onClick={() => setGalleryFilter('packaging')}
          >
            تغليف
          </button>
        </div>
        <div className="gallery-grid">
          {filteredGalleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTermsPage = () => (
    <div className="terms-page">
      <div className="container">
        <h1>شروط الخدمة</h1>
        <div className="terms-content">
          <h2>المقدمة</h2>
          <p>
            تنطبق شروط الاستخدام على الموقع وعلى جميع أقسامها وفروعها ومواقع الإنترنت التابعة لها التي تُشير إلى هذه الشروط والأحكام كمرجعٍ لها.
          </p>
          
          <h2>استخدام الموقع</h2>
          <p>
            لزيارة هذا الموقع، يجب ألا يقل عمرك عن 18 عامًا أو أن تزور الموقع تحت إشراف أحد الوالدين أو الوصي القانوني.
          </p>
          
          <h2>مشاركات المستخدم</h2>
          <p>
            إنّ كلّ مشاركاتك على الموقع و/أو ما تقدمه لنا، بما في ذلك ــ على سبيل المثال وليس الحصرــ الأسئلة والانتقادات والتعليقات والاقتراحات تصبح ملكنا الوحيد والحصري.
          </p>
        </div>
      </div>
    </div>
  );

  const renderPrivacyPage = () => (
    <div className="privacy-page">
      <div className="container">
        <h1>سياسة الخصوصية</h1>
        <div className="privacy-content">
          <p>
            موقعنا يحترم خصوصيّتك ويسعى لحماية بياناتك الشخصية. توضح سياسة الخصوصيّة كيفية جمع واستخدام بياناتك الشخصية (تحت ظروفٍ معينةٍ).
          </p>
          
          <h2>البيانات التي نجمعها</h2>
          <p>
            قد نحتاج لجمع المعلومات الخاصة بكَ إذا أردت تسجيل طلب شراء لسلعة من موقعنا.
          </p>
          
          <h2>استخدامات أخرى لمعلوماتك الشخصيَّة</h2>
          <p>
            قد نستخدم معلوماتك الشخصيَّة في استطلاعات الرأي وأبحاث التسويق، بناءً على رغبتك، لأغراضٍ إحصائية مع ضمان سريتها التامة.
          </p>
        </div>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="contact-page">
      <div className="container">
        <h1>للشكاوي والاقتراحات</h1>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <label>الاسم</label>
              <input type="text" placeholder="أدخل اسمك" />
            </div>
            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input type="email" placeholder="أدخل بريدك الإلكتروني" />
            </div>
            <div className="form-group">
              <label>الرسالة</label>
              <textarea placeholder="أدخل رسالتك" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">إرسال</button>
          </form>
          
          <div className="contact-info">
            <h3>معلومات التواصل</h3>
            <p><strong>WhatsApp:</strong> +966 53 399 1487</p>
            <p><strong>Email:</strong> info@artsalla.com</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home': return renderHomePage();
      case 'about': return renderAboutPage();
      case 'products': return renderProductsPage();
      case 'gallery': return renderGalleryPage();
      case 'terms': return renderTermsPage();
      case 'privacy': return renderPrivacyPage();
      case 'contact': return renderContactPage();
      case 'cart': return renderCartPage();
      case 'product-detail': return renderProductDetail();
      default: return renderHomePage();
    }
  };

  return (
    <div className="App" dir="rtl">
      {/* Header */}
      <header className="header">
        <div className="top-bar">
          <p>نستقبل طلبات التصميم من جميع الدول</p>
        </div>
        
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <img src={artsallaLogo} alt="آرت سلة" onClick={() => setCurrentPage('home')} />
            </div>
            
            <div className="nav-menu">
              <button 
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => setCurrentPage('home')}
              >
                جديدنا
              </button>
              
              <div className="nav-dropdown">
                <button 
                  onClick={() => setIsDesignServicesOpen(!isDesignServicesOpen)}
                  className="dropdown-toggle"
                >
                  خدمات التصميم
                </button>
                {isDesignServicesOpen && (
                  <div className="dropdown-menu">
                    <a href="#identity" onClick={() => openProductDetail(products[3])}>تصميم هوية بصرية متكاملة</a>
                    <a href="#arabic-logo" onClick={() => openProductDetail(products[2])}>تصميم شعار بالخط العربي</a>
                    <a href="#packaging">تصميم التغليف بأنواعه</a>
                    <a href="#names" onClick={() => openProductDetail(products[0])}>كتابة الأسماء بالخط العربي</a>
                  </div>
                )}
              </div>
              
              <div className="nav-dropdown">
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="dropdown-toggle"
                >
                  المنتجات
                </button>
                {isProductsOpen && (
                  <div className="dropdown-menu">
                    <a href="#ramadan">مخطوطات رمضانية مميزة</a>
                    <a href="#brushes-procreate">فرش و تشكيلات الخط العربي - Procreate</a>
                    <a href="#brushes-illustrator">فرش وتشكيلات الخط العربي - Illustrator</a>
                    <a href="#library">مكتبة فرش الخط العربي الشاملة - Procreate</a>
                    <a href="#shiny-brushes">فرش الخط العربي اللامعة - Procreate</a>
                  </div>
                )}
              </div>
              
              <button 
                className={currentPage === 'gallery' ? 'active' : ''}
                onClick={() => setCurrentPage('gallery')}
              >
                معرض الأعمال
              </button>
              
              <div className="nav-search">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="search-toggle"
                >
                  🔍
                </button>
                {isSearchOpen && (
                  <div className="search-dropdown">
                    <input type="text" placeholder="البحث..." />
                  </div>
                )}
              </div>
              
              <button className="login-btn">تسجيل الدخول</button>
              
              <button 
                className="cart-btn"
                onClick={() => setCurrentPage('cart')}
              >
                سلة التسوق
                {getCartItemsCount() > 0 && (
                  <span className="cart-count">{getCartItemsCount()}</span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>التواصل</h3>
              <p>للشكاوي والاقتراحات</p>
              <p>WhatsApp: +966 53 399 1487</p>
              <p>info@artsalla.com</p>
            </div>
            
            <div className="footer-section">
              <h3>الشروط والسياسات</h3>
              <button onClick={() => setCurrentPage('terms')}>شروط الاستخدام</button>
              <button onClick={() => setCurrentPage('privacy')}>سياسة الخصوصية</button>
              <a href="#return-policy">الاستبدال والاسترجاع</a>
            </div>
            
            <div className="footer-section">
              <h3>عن آرت سلة</h3>
              <button onClick={() => setCurrentPage('about')}>من نحن</button>
              <button onClick={() => setCurrentPage('gallery')}>معرض الأعمال</button>
              <a href="#blog">تدوينات آرت سلة</a>
              <a href="#affiliate">التسويق بالعمولة</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

