// ========= ID ========= //
const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @tn2am ========= // 
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"], obj = JSON.parse($response.body); obj.Attention = "Thằng nào đem bán làm chó ăn cứt!"; var tn2am = { is_sandbox: !1, ownership_type: "PURCHASED", billing_issues_detected_at: null, period_type: "normal", expires_date: "2099-12-18T01:04:17Z", grace_period_expires_date: null, unsubscribe_detected_at: null, original_purchase_date: "1890-05-19T01:04:18Z", purchase_date: "1890-05-19T01:04:17Z", store: "app_store" }, tn2am5 = { grace_period_expires_date: null, purchase_date: "1890-05-19T01:04:17Z", product_identifier: "com.tn2am.premium.yearly", expires_date: "2099-12-18T01:04:17Z" }; const match = Object.keys(mapping).find(e => ua.includes(e)); if (match) { let [e, s] = mapping[match]; s ? (tn2am5.product_identifier = s, obj.subscriber.subscriptions[s] = tn2am) : obj.subscriber.subscriptions["com.tn2am.premium.yearly"] = tn2am, obj.subscriber.entitlements[e] = tn2am5 } else obj.subscriber.subscriptions["com.tn2am.premium.yearly"] = tn2am, obj.subscriber.entitlements.pro = tn2am5; $done({ body: JSON.stringify(obj) });
