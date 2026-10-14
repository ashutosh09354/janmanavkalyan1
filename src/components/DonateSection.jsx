import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { DONATION, CONTACT } from '../data/siteData'

export default function DonateSection() {
  const [tab, setTab] = useState('upi')
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(DONATION.upiId); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* ignore */ }
  }
  return (
    <section aria-labelledby="donate-title" className="section-y">
      <div className="container-x max-w-3xl">
        <h2 id="donate-title" className="text-3xl font-bold sm:text-4xl">Support Our Mission</h2>
        <p className="mt-3 text-ink/75">Your contribution can help us continue serving communities.</p>

        <div className="mt-8 rounded-3xl bg-white p-5 shadow-soft sm:p-8">
          <div role="tablist" aria-label="Payment method" className="grid grid-cols-2 gap-2 rounded-full bg-royal-50 p-1">
            {[['upi', 'UPI'], ['bank', 'Bank Transfer']].map(([k, l]) => (
              <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={`rounded-full py-2.5 text-sm font-semibold transition ${tab === k ? 'bg-royal text-white' : 'text-royal'}`}>{l}</button>
            ))}
          </div>

          {tab === 'upi' ? (
            <div className="mt-6 text-center">
              <div className="mx-auto grid h-52 w-52 place-items-center overflow-hidden rounded-2xl border-2 border-dashed border-royal/25 bg-warm">
                {DONATION.upiQr ? <img src={DONATION.upiQr} alt="UPI QR code for Jan Manav Kalyan Foundation" className="h-full w-full object-contain" /> : <span className="px-4 text-sm text-ink/50">UPI QR code — to be added by the Foundation</span>}
              </div>
              <div className="mx-auto mt-5 flex max-w-sm items-center justify-between gap-3 rounded-xl bg-warm px-4 py-3 text-left">
                <div><p className="text-xs text-ink/55">UPI ID </p><p className="text-sm font-semibold">{DONATION.upiId}</p></div>
                <button onClick={copy} aria-label="Copy UPI ID" className="grid h-10 w-10 place-items-center rounded-full bg-royal text-white">{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</button>
              </div>
            </div>
          ) : (
            <dl className="mt-6 space-y-3 text-sm">
              {[['Account name', DONATION.accountName], ['Account number', DONATION.accountNumber], ['IFSC', DONATION.ifsc], ['Bank', DONATION.bank]].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-royal/10 pb-2"><dt className="text-ink/60">{k}</dt><dd className="font-semibold">{v}</dd></div>
              ))}
            </dl>
          )}
       
        </div>
      </div>
    </section>
  )
}
