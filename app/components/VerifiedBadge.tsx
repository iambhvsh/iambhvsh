export default function VerifiedBadge({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox='0 0 24 24' 
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform="matrix(0.42 0 0 0.42 12 12)">
        <g>
          <g transform="matrix(1 0 0 1 0 0)">
            <polygon 
              className="fill-blue-500"
              points="5.62,-21 9.05,-15.69 15.37,-15.38 15.69,-9.06 21,-5.63 18.12,0 21,5.62 15.69,9.05 15.38,15.37 9.06,15.69 5.63,21 0,18.12 -5.62,21 -9.05,15.69 -15.37,15.38 -15.69,9.06 -21,5.63 -18.12,0 -21,-5.62 -15.69,-9.05 -15.38,-15.37 -9.06,-15.69 -5.63,-21 0,-18.12" 
            />
          </g>
          <g transform="matrix(1 0 0 1 -0.01 0.51)">
            <polygon 
              className="fill-white"
              points="-2.6,6.74 -9.09,0.25 -6.97,-1.87 -2.56,2.53 7,-6.74 9.09,-4.59" 
            />
          </g>
        </g>
      </g>
    </svg>
  )
} 