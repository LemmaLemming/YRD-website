import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Image
            src="/images/yrd-logo.png"
            alt="YRD Holdings"
            width={120}
            height={34}
            className="h-7 w-auto object-contain opacity-90"
          />
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            YRD Holdings HK &middot; Est. 2017
          </p>
        </div>

        <p className="text-[11px] leading-relaxed text-muted-foreground/80">
          FOR LICENSED FINANCIAL ADVISORS AND INSTITUTIONAL INVESTORS IN HONG KONG. This information is deemed to be
          issued by YRD Asset Management Limited, which is licensed by the Securities and Futures Commission to
          conduct Type 1 (dealing in securities), Type 4 (advising on securities), and Type 9 (asset management)
          regulated activities. For use by licensed financial advisors and institutional investors who are
          &ldquo;professional investors&rdquo; (as defined in the Securities and Futures Ordinance [Chapter 571 of
          the Laws of Hong Kong] and its subsidiary legislation) only in Hong Kong. This information is provided
          solely for informational, internal training, and educational purposes and is not for the purpose of
          inducing, or attempting to induce, such financial advisors and institutional investors to make an
          investment nor for the purpose of providing investment advice. Not for use with the public. Unauthorized
          copying, reproducing, duplicating, or transmitting of this information are prohibited. This information
          and the distribution of this material are not intended to constitute and do not constitute an offer or
          an invitation to offer to the Hong Kong public to acquire, dispose of, subscribe for, or underwrite any
          securities, structured products, or related financial products or instruments nor investment advice
          thereto. Any opinions and views expressed herein are subject to change. Neither YRD Holdings, YRD Asset
          Management Limited, nor its affiliates shall be responsible or held responsible for any content prepared
          by financial advisors or institutional investors. Financial advisors in Hong Kong shall not actively
          market the services of YRD Asset Management Limited or its affiliates to the Hong Kong public.
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-[11px] leading-relaxed text-muted-foreground/80">
            [1] SFC registration is not a recommendation or endorsement of an OFC nor does it guarantee the commercial merits of an OFC or its performance. It does not mean the OFC is suitable for all investors nor does it represent an endorsement of its suitability for any particular investor or class of investors.
          </p>
          <p className="text-[11px] leading-relaxed text-muted-foreground/80">
            [2] Past performance, including simulated back-tested data, is not indicative of future returns.
          </p>
        </div>

        <p className="text-[11px] text-muted-foreground/60">
          &copy; {new Date().getFullYear()} YRD Asset Management Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
